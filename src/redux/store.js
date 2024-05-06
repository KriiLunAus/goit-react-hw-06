
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice"
import filterReducer from "./filtersSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
    key: "contacts",
    storage,
    whitelist : ["name"],
}

const persistedContactReducer = persistReducer(contactsPersistConfig, contactReducer)

const store = configureStore({
    reducer:{
        contacts: persistedContactReducer,
        filters: filterReducer,
    },
});



export const getContacts = () => store.getState().contacts;
export const selectNameFilter = () => store.getState().filters;
export const persistor = persistStore(store);


export default store;