import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction(
  'addContact',

  ({ name, number }) => {
    return {
      payload: {
        name,
        number,
        id: shortid(),
      },
    };
  },
);
const deleteContact = createAction('deleteContact');

const filterContacts = createAction('filterContacts');

export { addContact, deleteContact, filterContacts };
