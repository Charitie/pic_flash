import { useSelector } from 'react-redux';
import Loader from '../../Components/Loader';
import PageHeader from '../../Components/PageHeader/PageHeader';
import PageNavigation from '../../Components/PageNavigation/PageNavigation';
import Pagination from '../../Components/Pagination/Pagination';
import PhotoCard from '../../Components/PhotoCard';
import { getPhotosStatus, selectPhotos } from './photosSlice';

const Photos = () => {
  const photos = useSelector(selectPhotos);
  const status = useSelector(getPhotosStatus);

  return (
    <div className='container bg-white p-5' data-testid='photos'>
      <PageNavigation path='Photos' />
      <h4> All Photos</h4>
      <PageHeader items={photos} />
      {status === 'loading' && <Loader />}
      <PhotoCard photos={photos} />
      <Pagination total={photos.length} />
    </div>
  );
};

export default Photos;
