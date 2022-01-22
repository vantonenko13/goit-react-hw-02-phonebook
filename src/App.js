import React, { Component } from "react";

import ContactForm from "./contact-form/ContactForm";
import Filter from "./contact-filter/Filter";
import ContactList from "./contact-list/ContactList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
      filter: "",
    };
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
