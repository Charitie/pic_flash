import { useState } from 'react';
import { PageData } from '../Components/Pagination/types';

export function usePageData() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const pageData: PageData = {
    page,
    limit,
    setPage,
    setLimit,
  };

  return [pageData]; // infers [boolean, typeof load] instead of (boolean | typeof load)[]
}
