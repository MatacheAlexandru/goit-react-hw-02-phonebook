import React from "react";
import styles from "./ContactItem.module.css";

const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={styles.item}>
    {contact.name}: {contact.number}
    <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
  </li>
);

export default ContactItem;
