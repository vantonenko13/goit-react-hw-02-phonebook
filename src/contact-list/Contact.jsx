import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactList.module.css";

const Contact = ({ id, idx, name, number, deleteHandler }) => {
  return (
    <li className={styles.contact}>
      {idx + 1}. {name}: {number}
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  idx: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteHandler: PropTypes.func.isRequired,
};

export default Contact;
