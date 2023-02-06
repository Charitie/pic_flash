import { Link } from 'react-router-dom';
import { Photo } from '../utils/types';

const PhotoCard = ({ photos }: { photos: [] }) => {
  return (
    <div className='row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4'>
      {photos.map((photo: Photo) => {
        return (
          <div key={photo.id} className='col'>
            <Link to={`/photos/${photo.id}`}>
              <div className='card h-100'>
                <img className='card-img-top' src={photo.url} alt='' />
                <div className='card-body d-flex flex-column align-items-center'>
                  <h5 className='card-title'>{photo.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoCard;
