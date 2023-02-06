import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageNavigation from '../../Components/PageNavigation/PageNavigation';
import { AppDispatch } from '../../store';
import UserAlbums from './UserAlbums';
import { fetchUserById, selectSingleUser } from './usersSlice';

const SingleUser = () => {
  const user = useSelector(selectSingleUser);
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [id]);

  return (
    <div className='container bg-white py-4' data-testid='single-user'>
      <PageNavigation path='Users' current={` ${user.name} / albums`} />
      <UserAlbums userId={id} />
    </div>
  );
};

export default SingleUser;
