import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../Components/Loader';
import PageHeader from '../../Components/PageHeader/PageHeader';
import PageNavigation from '../../Components/PageNavigation/PageNavigation';
import Pagination from '../../Components/Pagination/Pagination';
import PhotoCard from '../../Components/PhotoCard';
import { AppDispatch } from '../../store';
import {
  fetchAlbumById,
  fetchAlbumPhotos,
  getAlbumStatus,
  selectAlbumPhotos, selectSingleAlbum
} from './albumsSlice';

const SingleAlbum = () => {
  const params = useParams();
  const id = Number(params.id);
  const album = useSelector(selectSingleAlbum);
  const photos = useSelector(selectAlbumPhotos);
  const status = useSelector(getAlbumStatus)

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAlbumById(id));
    dispatch(fetchAlbumPhotos(id));
  }, [id]);

  return (
    <div className='container w-75 bg-white p-4' data-testid="single-album">
      <PageNavigation path='Albums' current={` ${album.id} / Photos`} />
      <h4>{album.title}</h4>
      <h3 className='border-bottom pt-4'> Photos </h3>
      {status === 'loading' && <Loader />}

      <PageHeader items={photos} />
      <PhotoCard photos={photos} />
      <Pagination total={photos.length} />
    </div>
  );
};

export default SingleAlbum;
