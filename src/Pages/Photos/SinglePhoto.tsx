import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageNavigation from '../../Components/PageNavigation/PageNavigation';
import { AppDispatch } from '../../store';
import { fetchPhotoById, selectSinglePhoto } from './photosSlice';

const SinglePhoto = () => {
  const photo = useSelector(selectSinglePhoto);
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  const photoId = Number(params.id);

  useEffect(() => {
    dispatch(fetchPhotoById(photoId));
  }, [photoId]);

  return (
    <div className='container bg-white p-5 h-100' data-testid='single-photo'>
      <PageNavigation path='Photos' current={` ${photo.id} `} />
      <div className='h-75 p-5'>
        <div className='card-body d-flex justify-content-around align-items-lg-center h-75'>
          <div className='h-100'>
            <img src={photo.url} className='w-100 h-100 pr-4' alt='...' />
          </div>
          <div>
            <h5 className='card-title'>Photo title</h5>
            <p className='card-text'>{photo.title}</p>
            <a href={photo.url} target='_parent' className='btn btn-primary'>
              View Image
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePhoto;
