import Pagination from "@material-ui/lab/Pagination";

const MyPagination = ({ page, handleChange, totPages }) => {
  return (
    <Pagination
      count={totPages}
      page={page || 1}
      onChange={handleChange}
      color="primary"
    ></Pagination>
  );
};

export default MyPagination;
