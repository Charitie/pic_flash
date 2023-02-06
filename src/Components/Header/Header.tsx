import { useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import { NavLink } from 'react-router-dom';
import { useGoogleLogin } from '../../hooks/useGoogleLogin';
import { useSearchInput } from '../../hooks/useSearchInput';
import { CLIENT_ID } from '../../utils/constants';
import Sidebar from '../Sidebar/Sidebar';
import './Header.scss';

const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [searchClass, setSearchClass] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toggleClass, setToggleClass] = useState('');
  const [sidebarClass, setSidebarClass] = useState({
    backDrop: '',
    sidebarActive: '',
  });
  const [searchParam, setSearchParam] = useSearchInput()
  const [, setProfile] = useGoogleLogin()

  const showSearchInput = () => {
    setShowInput(!showInput);
    if (showInput) {
      setSearchClass('header__search--active');
    } else {
      setSearchClass('');
    }
  };

  const toggleSideBar = () => {
    setSidebarOpen(!sidebarOpen);
    if (sidebarOpen) {
      setToggleClass('header__btn--active');
      setSidebarClass({ sidebarActive: 'sidebar--active', backDrop: 'back-drop--active' });
    } else {
      setToggleClass('');
      setSidebarClass({
        backDrop: '',
        sidebarActive: '',
      });
    }
  };

  const logOut = () => {
    setProfile(null);
    localStorage.clear();
  };

  const user = localStorage.getItem('userInfo')
  const userInfo = JSON.parse(`${user}`)

  const navLinkClass = ({ isActive }: { isActive: boolean }) => `${isActive ? 'active' : ''}`
  return (
    <>
      <header className='header col-12 bg-white'>
        <div className='header__content'>
          <div className='header__logo'>
            <img className='' src={require('../../assets/transparent.png')} alt='logo' />
          </div>
          <nav className='header__nav'>
            <NavLink className={navLinkClass} to='/users'>Users</NavLink>
            <NavLink className={navLinkClass} to='/albums'>Albums</NavLink>
            <NavLink className={navLinkClass} to='/photos'>Photos</NavLink>
          </nav>
          <form action='#' className={`header__search ${searchClass}`}>
            <input type='text' placeholder='Users, Albums or Photos' value={searchParam} onChange={e => setSearchParam(e.target.value)} />
            <button type='button'>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='auto' viewBox='0 0 24 24'>
                <path d='M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z'></path>
              </svg>
            </button>
            <button type='button' className='close' onClick={showSearchInput}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'></path>
              </svg>
            </button>
          </form>

          <div className='header__actions'>
            <div className='header__action header__action--search'>
              <button className='header__action-btn' type='button' onClick={showSearchInput}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='auto'
                  viewBox='0 0 24 24'
                >
                  <path d='M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z'></path>
                </svg>
              </button>
            </div>

            <div className='header__action header__action--signout'>
              <NavLink className='header__action-btn' to='/'>
                <GoogleLogout
                  className='google-logout'
                  clientId={CLIENT_ID}
                  buttonText='Log out'
                  onLogoutSuccess={logOut}
                >
                  <span>Sign Out</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='auto'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20.5,15.1a1,1,0,0,0-1.34.45A8,8,0,1,1,12,4a7.93,7.93,0,0,1,7.16,4.45,1,1,0,0,0,1.8-.9,10,10,0,1,0,0,8.9A1,1,0,0,0,20.5,15.1ZM21,11H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H21a1,1,0,0,0,0-2Z'></path>
                  </svg>
                </GoogleLogout>
              </NavLink>
            </div>

            <div className='header__avatar mx-2'>
              <img className='w-100 h-100' src={userInfo?.imageUrl} alt={userInfo?.name} />

              <div className='drop-down'>
                <strong>User Profile</strong>
                <p className='pt-2'>
                  <strong>Name: </strong>
                  {userInfo?.name}
                </p>
                <p>
                  <strong>Email: </strong>
                  {userInfo?.email}
                </p>
              </div>
            </div>
          </div>

          <button className={`header__btn ${toggleClass}`} type='button' onClick={toggleSideBar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <Sidebar classes={sidebarClass} />
    </>
  );
};

export default Header;
