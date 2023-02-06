import { Route, Routes } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import Private from '../../utils/PrivateRoutes';
import Landing from '../Landing/Landing';
import PageNotFound from '../PageNotFound/PageNotFound';
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
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
