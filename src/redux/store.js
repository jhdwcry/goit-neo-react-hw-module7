import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactSlice";
import filtersReducer from "./filtersSlice";

const store = configureStore({
  reducer: { 
    contacts: contactsReducer, 
    filters: filtersReducer 
  },
  devTools: true, 
});

export default store;
