import store from '../../store';
import { fetchUserAlbums, fetchUserById, fetchUsers } from './usersSlice';

describe('Users page', () => {
  const userId = 1;

  it('should have an initial users state', () => {
    const state = store.getState().users;
    expect(state).toEqual({ status: 'idle', user: {}, users: [], userAlbums: [], error: null });
  });

  it('should be able to fetch  user list', async () => {
    const result = await store.dispatch(fetchUsers(''));

    expect(result.type).toBe('users/fetchUsers/fulfilled');
    const { users } = store.getState().users;
    expect(users.length).toBeGreaterThan(0);
  });

  it('should be able to fetch single user', async () => {
    const result = await store.dispatch(fetchUserById(userId));

    expect(result.type).toBe('users/fetchUserById/fulfilled');
    const { user } = store.getState().users;
    expect(Object.keys(user).length).toBeGreaterThan(0);
  });

  it('should be able to fetch user albums', async () => {
    const result = await store.dispatch(fetchUserAlbums(userId));

    expect(result.type).toBe('users/fetchUserAlbums/fulfilled');
    const { userAlbums } = store.getState().users;
    expect(userAlbums.length).toBeGreaterThan(0);
  });
});
