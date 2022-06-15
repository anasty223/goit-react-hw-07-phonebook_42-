import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const add = ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
});
export const addContacts = createAction("contacts/add ", add);

export const deleteContact = createAction("contacts/delete");

export const changeFilter = createAction("contacts/changeFilter");
