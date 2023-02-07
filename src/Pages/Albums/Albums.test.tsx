import store from '../../store';
import { fetchAlbumById, fetchAlbumPhotos, fetchAlbums } from './albumsSlice';

describe('albums page', () => {
  const albumId = 1;
  it('should have an initial albums state', () => {
    const state = store.getState().albums;
    expect(state).toEqual({
      albums: [],
      album: {},
      albumPhotos: [],
      status: 'idle',
    });
  });

  it('should be able to fetch album list', async () => {
    const result = await store.dispatch(fetchAlbums(''));

    expect(result.type).toBe('albums/fetchAlbums/fulfilled');
    const { albums } = store.getState().albums;
    expect(albums.length).toBeGreaterThan(0);
  });

  it('should be able to fetch single album', async () => {
    const result = await store.dispatch(fetchAlbumById(albumId));

    expect(result.type).toBe('albums/fetchAlbumById/fulfilled');
    const { album } = store.getState().albums;
    expect(Object.keys(album).length).toBeGreaterThan(0);
  });

  it('should be able to fetch the album albums', async () => {
    const result = await store.dispatch(fetchAlbumPhotos(albumId));

    expect(result.type).toBe('albums/fetchAlbumPhotos/fulfilled');
    const { albumPhotos } = store.getState().albums;
    expect(albumPhotos.length).toBeGreaterThan(0);
  });
});
