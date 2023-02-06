import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Pages/Users/usersSlice';
import albumsSlice from './Pages/Albums/albumsSlice';
import photosSlice from './Pages/Photos/photosSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    albums: albumsSlice,
    photos: photosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
