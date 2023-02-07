import store from '../../store';
import { fetchPhotoById, fetchPhotos } from './photosSlice';

describe('Users page', () => {
  const page = 1;
  const limit = 5;
  const searchParam = '';
  const photoId = 1;

  it('should have an initial photos state', () => {
    const state = store.getState().photos;
    expect(state).toEqual({
      photo: {},
      photos: [],
      status: 'idle',
    });
  });

  it('should be able to fetch photo list', async () => {
    const result = await store.dispatch(fetchPhotos({ page, limit, searchParam }));

    expect(result.type).toBe('photos/fetchPhotos/fulfilled');
    const { photos } = store.getState().photos;
    expect(photos.length).toBeGreaterThan(0);
  });

  it('should be able to fetch single photo', async () => {
    const result = await store.dispatch(fetchPhotoById(photoId));

    expect(result.type).toBe('photos/fetchPhotoById/fulfilled');
    const { photo } = store.getState().photos;
    expect(Object.keys(photo).length).toBeGreaterThan(0);
  });
});
