import Pagination from '@mui/material/Pagination';

export function MyPagination({ page, handleChange, totPages }) {
  return (
    <Pagination
      count={totPages}
      page={page || 1}
      onChange={handleChange}
      color="primary"
    ></Pagination>
  );
}
