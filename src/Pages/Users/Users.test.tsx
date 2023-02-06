import store from '../../store';
import { mockNetWorkResponse } from '../../utils/test.data';

describe('Users page', () => {
  beforeAll(() => {
    mockNetWorkResponse();
  });

  it('should have an initial users state', () => {
    const state = store.getState().users;
    expect(state).toEqual({ status: 'idle', user: {}, users: [], userAlbums: [], error: null });
  });

  // it('should be able to fetch the user list', async () => {
  //   const result = await store.dispatch(fetchUsers());

  //   const users = result.payload;
  //   console.log('USERS:::', users, result.type)

  //   expect(result.type).toBe('users/fetchUsers/fulfilled');
  //   expect(users.length).toBeGreaterThan(0);

  //   const state = store.getState().users;

  //   expect(state.users).toContain(getUserListResponse[0]);
  // });
});
