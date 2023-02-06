import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchUsers } from '../Pages/Users/usersSlice';
import { AppDispatch } from '../store';

export function useSearchInput() {
  const [searchParam, setSearchParam] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();

  const filteredData = () => {
    if (pathname.includes('/users')) {
      dispatch(fetchUsers(searchParam));
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
