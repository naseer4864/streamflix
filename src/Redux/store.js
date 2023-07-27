import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import movieReducer from './movieSlice';

const persistConfig = {
  key: 'root',
  storage,
 
};

const persistedReducer = persistReducer(persistConfig, movieReducer);

const store = configureStore({
  reducer: {
    movies: persistedReducer,
  },
  middleware: getDefaultMiddleware({
   
    serializableCheck: false, 
  }),
});

export const persistor = persistStore(store);

export default store;

