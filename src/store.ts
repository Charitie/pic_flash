import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Pages/Users/usersSlice';
import albumsSlice from './Pages/Albums/albumsSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    albums:albumsSlice,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
