import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithContext } from '../../utils/test.data';
import Albums from '../Albums/Albums';
import SingleAlbum from '../Albums/SingleAlbum';
import PageNotFound from '../PageNotFound/PageNotFound';
import Photos from '../Photos/Photos';
import SinglePhoto from '../Photos/SinglePhoto';
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

  it('should render albums page', () => {
    const albumRoute = '/albums';
    renderWithContext(<Albums />, albumRoute);
    expect(screen.getByTestId('albums')).toBeInTheDocument();
  });

  it('should render single album page', () => {
    const singleAlbum = '/albums/1';
    renderWithContext(<SingleAlbum />, singleAlbum);
    expect(screen.getByTestId('single-album')).toBeInTheDocument();
  });

  it('should render photos page', () => {
    const photosRoute = '/photo/1';
    renderWithContext(<Photos />, photosRoute);
    expect(screen.getByTestId('photos')).toBeInTheDocument();
  });

  it('should render single photo page', () => {
    const singlePhotoRoute = '/photo/1';
    renderWithContext(<SinglePhoto />, singlePhotoRoute);
    expect(screen.getByTestId('single-photo')).toBeInTheDocument();
  });
});
