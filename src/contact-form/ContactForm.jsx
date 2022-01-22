import React, { Component } from "react";

import { nanoid } from "nanoid";

import PropTypes from "prop-types";

class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      number: "",
    };
  }

  submitHandler = () => {
    const contact = { ...this.state };
    contact.id = nanoid();

    if (this.state.name && this.state.number) {
      this.props.onCreateHandler(contact);
    } else {
      return alert("Enter name and number!");
    }
  };

  render() {
    return (
      <form id="contact-creation-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input
            value={this.state.name}
            onChange={(e) => this.setState((state) => ({ ...state, name: e.target.value }))}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            value={this.state.number}
            onChange={(e) => this.setState((state) => ({ ...state, number: e.target.value }))}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button onClick={this.submitHandler}>Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = { onCreateHandler: PropTypes.func.isRequired };

export default ContactForm;
