import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

type Photo = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type photosState = {
  photo: Photo;
  photos: [];
  status: 'idle' | 'loading' | 'fulfilled' | 'failed';
};
const initialState = {
  photo: {},
  photos: [],
  status: 'idle',
} as photosState;

type Params = {
  page: number;
  limit: number;
  searchParam: string;
};

export const fetchPhotos = createAsyncThunk<[], Params>(
  'photos/fetchPhotos',
  async ({ page, limit, searchParam }) => {
    const response = await axios.get(`${BASE_URL}/photos?_$start=${page}&_limit=${limit}`);
    if (searchParam.length > 2) {
      const filteredPhotos = response.data.filter((photo: Photo) =>
        photo.title.toLowerCase().includes(searchParam.toLowerCase()),
      );
      return filteredPhotos;
    } else {
      return response.data;
    }
  },
);

export const fetchPhotoById = createAsyncThunk('photos/fetchPhotoById', async (photoId: number) => {
  const response = await axios.get(`${BASE_URL}/photos/${photoId}`);
  return response.data;
});

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.photos = action.payload;
      })
      .addCase(fetchPhotoById.fulfilled, (state, action) => {
        state.photo = action.payload;
      });
  },
});

export const selectPhotos = (state: { photos: { photos: [] } }) => state.photos.photos;
export const selectSinglePhoto = (state: { photos: { photo: Photo } }) => state.photos.photo;
export const getPhotosStatus = (state: { photos: { status: string } }) => state.photos.status;
// export const getPostsError = (state) => state.posts.error;

export default photosSlice.reducer;
