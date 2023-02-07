import { Link } from 'react-router-dom';
import './Sidebar.scss';

type Props = {
  classes: {
    backDrop: string;
    sidebarActive: string;
  };
};

const Sidebar = ({ classes }: Props) => {
  return (
    <>
      <div className={`back-drop ${classes.backDrop}`}></div>
      <div className={`sidebar ${classes.sidebarActive}`}>
        <ul className='sidebar__nav'>
          <li className='sidebar__nav-item'>
            <Link to='/users' className='sidebar__nav-link'>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='auto' viewBox='0 0 24 24'>
                <path d='M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z'></path>
              </svg>
              <span>Users</span>
            </Link>
          </li>

          <li className='sidebar__nav-item'>
            <Link to='/albums' className='sidebar__nav-link'>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='auto' viewBox='0 0 24 24'>
                <path d='M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z'></path>
              </svg>
              <span>Albums</span>
            </Link>
          </li>

          <li className='sidebar__nav-item'>
            <Link to='/photos' className='sidebar__nav-link'>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='auto' viewBox='0 0 24 24'>
                <path d='M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z'></path>
              </svg>
              <span>Photos</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
