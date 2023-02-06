import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithContext } from '../../utils/test.data';
import PageNotFound from '../PageNotFound/PageNotFound';
import SingleUser from '../Users/SingleUser';
import Users from '../Users/Users';
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

  it('should render users page', () => {
    const userRoute = '/users';
    renderWithContext(<Users />, userRoute);
    expect(screen.getByTestId('users')).toBeInTheDocument();
  });

  it('should render single user page', () => {
    const userRoute = '/users/1';
    renderWithContext(<SingleUser />, userRoute);
    expect(screen.getByTestId('single-user')).toBeInTheDocument();
  });
});
