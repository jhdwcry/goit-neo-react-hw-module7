import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactSlice";
import filtersReducer from "./filtersSlice";

import { composeWithDevTools } from "@redux-devtools/extension";

const store = configureStore({
  reducer: { contacts: contactsReducer, filters: filtersReducer },
  devTools: composeWithDevTools(),
});

export default store;

