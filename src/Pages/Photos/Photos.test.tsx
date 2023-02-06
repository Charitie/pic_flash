import store from '../../store';
import { mockNetWorkResponse } from '../../utils/test.data';

describe('Users page', () => {
  beforeAll(() => {
    mockNetWorkResponse();
  });

  it('should have an initial photos state', () => {
    const state = store.getState().photos;
    expect(state).toEqual({
      photo: {},
      photos: [],
      status: 'idle',
    });
  });

  // it('should be able to fetch the album list', async () => {
  //   const result = await store.dispatch(fetchAlbums());

  //   const users = result.payload;
  //   console.log('ALBUMS:::', users, result.type)

  //   expect(result.type).toBe('albums/fetchAlbums/fulfilled');
  //   expect(users.length).toBeGreaterThan(0);

  //   // const state = store.getState().users;

  //   // expect(state.users).toContain(getUserListResponse[0]);
  // });
});