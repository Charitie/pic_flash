import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useSearchInput() {
  const [searchParam, setSearchParam] = useState<string>('');
  const { pathname } = useLocation();

  useEffect(() => {
    return () => setSearchParam('');
  }, [pathname]);

  return [searchParam, setSearchParam] as const;
}
