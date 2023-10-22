import React from 'react';
import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
} from 'components/redux/phonebook/selectors';
import { deleteContact } from 'components/redux/phonebook/slice';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <div className={css.contactListItem}>
            <span className={css.fieldName}>{contact.name}:</span>
            <span className={css.fieldNumber}>{contact.number}</span>
            <button
              className={css.deleteBtn}
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
