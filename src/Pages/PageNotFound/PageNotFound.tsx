import { Link } from 'react-router-dom';
import './PageNotFound.scss';
const PageNotFound = () => {
  return (
    <div className='bg-light error-page'>
      <h1>Page Not Found</h1>
      <p className='zoom-area'>
        <b>Ug oh!</b> That page has gone missing.
      </p>
      <section className='error-container'>
        <span className='four'>
          <span className='screen-reader-text'>4</span>
        </span>
        <span className='zero'>
          <span className='screen-reader-text'>0</span>
        </span>
        <span className='four'>
          <span className='screen-reader-text'>4</span>
        </span>
      </section>
      <div className='link-container'>
        <Link to='/' className='more-link' rel='noreferrer'>
          Go back
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
