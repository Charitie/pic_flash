import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithContext } from '../../utils/test.data';
import PageNotFound from '../PageNotFound/PageNotFound';
import App from './App';

describe('Pages', () => {
  it('should landing page with login button', async () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Pic Flash/i)).toBeInTheDocument();
  });

  it('should render page not found on non existing page', () => {
    const badRoute = '/*';
    renderWithContext(<PageNotFound />, badRoute);
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
