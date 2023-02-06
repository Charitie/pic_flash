import { Link } from 'react-router-dom';
import { usePageData } from '../hooks/usepageData';
import { Album } from '../utils/types';

const AlbumCard = ({ albums }: { albums: [] }) => {
  const [{ limit, page }] = usePageData()

  console.log(albums.slice(page, limit))
  return (
    <div className='row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4'>
      {albums.slice(page, limit + 1).map((album: Album) => {
        return (
          <div key={album.id} className='col'>
            <Link to={`/albums/${album.id}`}>
              <div className='card pt-2 h-100'>
                <div className=' card-img-top d-flex justify-content-center '>
                  <img className='w-25 rounded-circle shadow-lg p-1 bg-body-tertiary' src={require('../assets/album.png')} alt="" />
                </div>
                <div className='card-body d-flex flex-column align-items-center'>
                  <h5 className='card-title'>{album.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AlbumCard;
