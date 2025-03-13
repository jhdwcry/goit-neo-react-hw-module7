import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactSlice";
import filtersReducer from "./filtersSlice";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
    filters: filtersReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
