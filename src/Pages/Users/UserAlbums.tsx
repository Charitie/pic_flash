import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlbumCard from '../../Components/AlbumCard';
import Loader from '../../Components/Loader';
import PageHeader from '../../Components/PageHeader/PageHeader';
import { AppDispatch } from '../../store';
import { fetchUserAlbums, getUsersStatus, selectAllUserAlbums } from './usersSlice';

const UserAlbums = ({ userId }: { userId: number }) => {
  const userAlbums = useSelector(selectAllUserAlbums);
  const status = useSelector(getUsersStatus);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUserAlbums(userId));
  }, [userId]);

  return (
    <div>
      <h4 className='m-4 border-bottom'>Albums</h4>
      <PageHeader items={userAlbums} />
      {status === 'loading' && <Loader />}
      <AlbumCard albums={userAlbums} />
    </div>
  );
};

export default UserAlbums;
