import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../store';

export function renderWithContext(element: React.ReactElement, route: string) {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>{element}</MemoryRouter>
    </Provider>,
  );
}
