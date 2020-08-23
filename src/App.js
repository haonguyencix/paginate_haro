import React, { Fragment, /*useState*/ } from 'react';
import './App.css';
// import Paginate from './Paginate';
import ScrollTable from './ScrollTable';
// import ReactPaginate from 'react-paginate';

function App() {
  // const [page, setPage] = useState(1);

  return (
    <Fragment>
      {/* <Paginate
        curPage={page}
        totalRec={300}
        recPerPage={20}
        maxPageDisplay={10}
        onChangePage={(page) => setPage(page)}
      /> */}
      <div className="container">
        <ScrollTable />
      </div>
      {/* <ReactPaginate
        initialPage={0}
        pageCount={15}
        pageRangeDisplayed={10}
        marginPagesDisplayed={1}
        onPageChange={(page) =>  setPage(page)}
        pageClassName="btn btn-light"
        activeClassName="btn btn-danger"
        activeLinkClassName="link-active"
        previousClassName="btn btn-light"
        nextClassName="btn btn-light"
      /> */}
    </Fragment>
  );
}

export default App;
