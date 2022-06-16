import { createReducer, combineReducers } from "@reduxjs/toolkit";

import { changeFilter } from "./action";

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});
export default combineReducers({
  filterReducer,
});
