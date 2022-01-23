import React, { Component } from "react";

import ContactForm from "./contact-form/ContactForm";
import Filter from "./contact-filter/Filter";
import ContactList from "./contact-list/ContactList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      filter: "",
    };
  }

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parseContacts = contacts ? JSON.parse(contacts) : null;

    if (parseContacts) {
      this.setState((state) => ({ ...state, contacts: [...parseContacts] }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  filteredContacts = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  contactCreationHandler = (contact) => {
    const found = this.state.contacts.find(
      (item) => item.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (found) {
      return alert(`${found.name} is already in contacts.`);
    }
    this.setState((state) => ({ ...state, contacts: [...state.contacts, contact] }));
  };

  filterChangeHandler = (e) => {
    this.setState((state) => ({ ...state, filter: e.target.value }));
  };

  deleteContactHandler = (id) => {
    const newArray = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState((state) => ({ ...state, contacts: [...newArray] }));
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onCreateHandler={this.contactCreationHandler} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChangeHandler={this.filterChangeHandler} />
        <ContactList contacts={this.filteredContacts()} deleteHandler={this.deleteContactHandler} />
      </div>
    );
  }
}

export default App;
