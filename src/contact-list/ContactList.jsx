import React from "react";
import PropTypes from "prop-types";

import Contact from "./Contact";

import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteHandler }) => {
  return (
    <div>
      <ul className={styles.contactList}>
        {contacts && contacts.length ? (
          contacts.map((contact, i) => {
            const { id, name, number } = contact;

            return (
              <Contact
                key={id}
                id={id}
                idx={i}
                name={name}
                number={number}
                deleteHandler={deleteHandler}
              />
            );
          })
        ) : (
          <p>Contacts not found!</p>
        )}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactList;
