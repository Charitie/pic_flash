import { usePageData } from '../../hooks/usepageData';

const PageHeader = ({ items }: { items: [] }) => {
  const [{ limit, setLimit }] = usePageData();
  return (
    <div className='row mb-2'>
      <p className='col-12 col-sm-6'>
        Showing 1 to {limit} of {items.length} results.
      </p>
      <form method='get' className='col-12 col-sm-6 d-flex justify-content-end'>
        <div className='form-group d-flex'>
          <label htmlFor='id_items_per_page' className='col-form-label'>
            Items per page
          </label>
          <div className='mx-2'>
            <select
              name='items_per_page'
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className='form-control'
              id='id_items_per_page'
            >
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
              <option value='20'>20</option>
              {/* <option value='80'>all</option> */}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PageHeader;
