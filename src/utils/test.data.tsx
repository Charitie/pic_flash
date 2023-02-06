import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export function renderWithContext(element: React.ReactElement, route: string) {
  render(<MemoryRouter initialEntries={[route]}>{element}</MemoryRouter>);
}
