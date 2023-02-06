import { render } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../store';

const getUserListResponse = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'ervin@april.biz',
  },
];

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axios);

  mock.onGet('/users/').reply(200, getUserListResponse);
};

export { mockNetWorkResponse, getUserListResponse };

export function renderWithContext(element: React.ReactElement, route: string) {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>{element}</MemoryRouter>
    </Provider>,
  );
}
