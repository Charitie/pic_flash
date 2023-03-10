import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchAlbums } from '../Pages/Albums/albumsSlice';
import { fetchPhotos } from '../Pages/Photos/photosSlice';
import { fetchUsers } from '../Pages/Users/usersSlice';
import { AppDispatch } from '../store';

export function useSearchInput() {
  const [searchParam, setSearchParam] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();

  const filteredData = () => {
    if (pathname.includes('/users')) {
      dispatch(fetchUsers(searchParam));
    } else if (pathname.includes('/albums')) {
      dispatch(fetchAlbums(searchParam));
    } else if (pathname.includes('/photos')) {
      dispatch(fetchPhotos({ page: 1, limit: 5, searchParam }));
    }
  };

  const delayedQuery = _.debounce(() => filteredData(), 1000);
  useEffect(() => {
    delayedQuery();

    return delayedQuery.cancel;
  }, [searchParam, pathname]);

  useEffect(() => {
    return () => setSearchParam('');
  }, [pathname]);

  return [searchParam, setSearchParam] as const;
}
