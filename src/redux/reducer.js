import { createReducer, combineReducers } from "@reduxjs/toolkit";

import { addContacts, deleteContact, changeFilter } from "./action";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const todoReducer = createReducer(initialState, {
  [addContacts]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});
export default combineReducers({
  todoReducer,
  filterReducer,
});
