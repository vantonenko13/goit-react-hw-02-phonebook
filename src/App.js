import React, { useState, useMemo } from "react";

import ContactForm from "./contact-form/ContactForm";
import Filter from "./contact-filter/Filter";
import ContactList from "./contact-list/ContactList";

function App() {
  const [state, setState] = useState({
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  });

  const filteredContacts = useMemo(() => {
    return state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    );
  }, [state]);

  const contactCreationHandler = (contact) => {
    const found = state.contacts.find(
      (item) => item.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (found) {
      return alert(`${found.name} is already in contacts.`);
    }
    setState({ ...state, contacts: [...state.contacts, contact] });
  };

  const filterChangeHandler = (e) => {
    setState({ ...state, filter: e.target.value });
  };

  const deleteContactHandler = (id) => {
    const newArray = state.contacts.filter((contact) => contact.id !== id);
    setState({ ...state, contacts: [...newArray] });
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onCreateHandler={contactCreationHandler} />

      <h2>Contacts</h2>
      <Filter value={state.filter} onChangeHandler={filterChangeHandler} />
      <ContactList contacts={filteredContacts} deleteHandler={deleteContactHandler} />
    </div>
  );
}

export default App;
