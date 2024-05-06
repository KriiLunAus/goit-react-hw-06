import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [ ];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            name: data.name,
            number: data.number,
          }
        };
      }
      },
      onDelete: {
          reducer(state, action) {
          return state.filter(contact => contact.id !== action.payload);
          }
      }
  }
});


export const { addContact,onDelete } = contactsSlice.actions;
export default contactsSlice.reducer;
