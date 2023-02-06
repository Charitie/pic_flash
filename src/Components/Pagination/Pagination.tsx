import { PaginationControl } from 'react-bootstrap-pagination-control';
import { usePageData } from '../../hooks/usepageData';

const Pagination = ({ total }: { total: number }) => {
  const [{ page, setPage, limit }] = usePageData();
  return (
    <div className='pt-4'>
      <PaginationControl
        between={4}
        page={page}
        total={total}
        limit={limit}
        changePage={(page) => {
          setPage(page);
        }}
        ellipsis={1}
      />
    </div>
  );
};

export default Pagination;
