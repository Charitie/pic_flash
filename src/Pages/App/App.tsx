import { Route, Routes } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import Private from '../../utils/PrivateRoutes';
import Landing from '../Landing/Landing';
import PageNotFound from '../PageNotFound/PageNotFound';
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
          </Route>
      </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
