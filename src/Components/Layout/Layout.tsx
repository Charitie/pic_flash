import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Layout.scss';

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <div className='layout__content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
