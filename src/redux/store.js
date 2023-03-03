import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contactsSlice';
import { userReducer } from './user/userSlice';

// const persistConfig = {
//   key: 'user',
//   version: 1,
//   storage,
//   whitelist: 'token',
// };

// const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: { contactsData: contactsReducer, userData: userReducer },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  // }),
});

// export const persistor = persistStore(store);
