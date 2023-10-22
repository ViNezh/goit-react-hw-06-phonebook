import { createSlice } from '@reduxjs/toolkit';

export const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    // state.items.push(action.payload);
    // return {
    //   ...state,
    //   items: [...state.items, action.payload],
    // };
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addContact, deleteContact, updateFilter } =
  phoneBookSlice.actions;
