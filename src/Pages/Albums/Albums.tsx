import { useSelector } from 'react-redux';
import AlbumCard from '../../Components/AlbumCard';
import Loader from '../../Components/Loader';
import PageHeader from '../../Components/PageHeader/PageHeader';
import PageNavigation from '../../Components/PageNavigation/PageNavigation';
import Pagination from '../../Components/Pagination/Pagination';
import { getAlbumStatus, selectAllAlbums } from './albumsSlice';



const Albums = () => {
  const albums: [] = useSelector(selectAllAlbums);
  const status = useSelector(getAlbumStatus)

  return (
    <div className='container bg-white p-5' data-testid='albums'>
      <PageNavigation path='Albums' />
      <h4 className='my-4'> All Albums</h4>
      <PageHeader items={albums} />
      {status === 'loading' && <Loader />}
      <AlbumCard albums={albums} />
      <Pagination total={albums.length} />
    </div>
  );
};
export default Albums;
