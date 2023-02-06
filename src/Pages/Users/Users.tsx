import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader';
import PageHeader from '../../Components/PageHeader/PageHeader';
import PageNavigation from '../../Components/PageNavigation/PageNavigation';
import Pagination from '../../Components/Pagination/Pagination';
import { getUsersStatus, selectAllUsers } from './usersSlice';

type User = {
  name: string;
  id: number;
};
const Users = () => {
  const users = useSelector(selectAllUsers);
  const status = useSelector(getUsersStatus);

  return (
    <div className='container bg-white p-5' data-testid='users'>
      <PageNavigation path='Users' />
      <h4 className='my-4'> All Users</h4>
      <PageHeader items={users} />
      {status === 'loading' && <Loader />}

      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {users.map((user: User) => {
          return (
            <div key={user.id} className='col' data-testid='user-list'>
              <Link to={`${user.id}`}>
                <div className='card pt-2 h-100'>
                  <div className=' card-img-top d-flex justify-content-center'>
                    <img className='w-25' src={require('../../assets/user-1.png')} alt='' />
                  </div>
                  <div className='card-body d-flex flex-column align-items-center'>
                    <h5 className='card-title'>{user.name}</h5>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination total={users.length} />
    </div>
  );
};

export default Users;
