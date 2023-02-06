import { Route, Routes } from 'react-router-dom';
import Landing from '../Landing/Landing';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
