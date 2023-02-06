import { Route, Routes } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import Private from '../../utils/PrivateRoutes';
import Albums from '../Albums/Albums';
import SingleAlbum from '../Albums/SingleAlbum';
import Landing from '../Landing/Landing';
import PageNotFound from '../PageNotFound/PageNotFound';
import Photos from '../Photos/Photos';
import SinglePhoto from '../Photos/SinglePhoto';
import SingleUser from '../Users/SingleUser';
import Users from '../Users/Users';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route element={<Layout />}>
          <Route path='users'>
            <Route
              index
              element={
                <Private>
                  <Users />
                </Private>
              }
            />
            <Route
              path=':id'
              element={
                <Private>
                  <SingleUser />
                </Private>
              }
            />
          </Route>
          <Route
            path='albums'
            element={
              <Private>
                <Albums />
              </Private>
            }
          />
          <Route
            path='albums/:id'
            element={
              <Private>
                <SingleAlbum />
              </Private>
            }
          />
          <Route
            path='photos'
            element={
              <Private>
                <Photos />
              </Private>
            }
          />
          <Route
            path='photos/:id'
            element={
              <Private>
                <SinglePhoto />
              </Private>
            }
          />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
