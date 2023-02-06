import { Link } from 'react-router-dom';
import './PageNavication.scss';

type Props = {
  current?: string;
  path: string;
};

const PageNavigation = ({ current, path }: Props) => {
  return (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link to={`/${path}`}>{path}</Link>
        </li>
        <li className='breadcrumb-item active' aria-current='page'>
          {current}
        </li>
      </ol>
    </nav>
  );
};

export default PageNavigation;
