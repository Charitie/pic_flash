import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

type Album = {
  userId: string;
  id: number;
  title: string;
};

type AlbumsState = {
  albums: [];
  album: Album;
  albumPhotos: [];
  status: 'idle' | 'loading' | 'fulfilled' | 'failed';
};
const initialState = {
  albums: [],
  album: {},
  albumPhotos: [],
  status: 'idle',
} as AlbumsState;

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async (searchParam: string) => {
  const response = await axios.get(`${BASE_URL}/albums`);

  if (searchParam.length > 2) {
    const filteredAlbums = response.data.filter((album: Album) =>
      album.title.toLowerCase().includes(searchParam.toLowerCase()),
    );
    return filteredAlbums;
  } else {
    return response.data;
  }
});

export const fetchAlbumById = createAsyncThunk('albums/fetchAlbumById', async (albumId: number) => {
  const response = await axios.get(`${BASE_URL}/albums/${albumId}`);
  return response.data;
});

export const fetchAlbumPhotos = createAsyncThunk('albums/fetchAlbumPhotos', async (albumId: number) => {
  const response = await axios.get(`${BASE_URL}/albums/${albumId}/photos`);
  return response.data;
});

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.albums = action.payload;
      })
      .addCase(fetchAlbumById.fulfilled, (state, action) => {
        state.album = action.payload;
      })
      .addCase(fetchAlbumPhotos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAlbumPhotos.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.albumPhotos = action.payload;
      });
  },
});

export const selectAllAlbums = (state: { albums: { albums: [] } }) => state.albums.albums;
export const selectAlbumPhotos = (state: { albums: { albumPhotos: [] } }) => state.albums.albumPhotos;
export const selectSingleAlbum = (state: { albums: { album: Album } }) => state.albums.album;
export const getAlbumStatus = (state: { albums: { status: string } }) => state.albums.status;

export default albumsSlice.reducer;
