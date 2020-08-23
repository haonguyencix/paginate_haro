import React, { useState, useEffect } from "react";

const Pagination = (props) => {
  const { totalRec, curPage = 1, recPerPage = 10, maxPageDisplay = 10, onChangePage } = props;

  const [state, setState] = useState({});

  useEffect(() => {
    handlePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curPage]);

  const handlePage = () => {
    const totalPages = Math.ceil(totalRec / recPerPage);

    let startPage;
    let endPage;

    if (totalPages <= maxPageDisplay) {
      startPage = 1;
      endPage = totalPages;
    } else {

      if (curPage < Math.ceil(maxPageDisplay / 2) + 1) {
        startPage = 1;
        endPage = maxPageDisplay;
      } 
      else if (curPage + (maxPageDisplay - (Math.ceil(maxPageDisplay / 2) + 1)) >= totalPages) {
        startPage = totalPages - (maxPageDisplay - 1);
        endPage = totalPages;
      } 
      else {
        startPage = curPage - Math.floor(maxPageDisplay / 2);
        endPage = curPage + Math.ceil(maxPageDisplay / 2) - 1;
      }

    }

    const startIndex = (curPage - 1) * recPerPage;
    const endIndex = Math.min(startIndex + recPerPage - 1, totalRec - 1);

    const pages = [...Array(endPage + 1 - startPage).keys()].map(i => startPage + i);

    if (curPage < 1 || curPage > Math.ceil(totalRec / recPerPage)) {
      return;
    }

    setState({ curPage, startPage, endPage, startIndex, endIndex, pages });
  };

  const generatePages = state.pages && state.pages.map((page) => {
    return (
      <div key={page}>
        <button
          onClick={() => onChangePage(page)}
          className={`btn ${curPage === page ? 'btn-danger' : 'btn-light'}`}
        >
          {page}
        </button>
      </div>
    )
  });

  const jumpMinStep = () => onChangePage(1);
  const jumpMaxStep = () => onChangePage(Math.ceil(totalRec / recPerPage));

  const decStep = () => {
    if(curPage > 1 && curPage <= Math.ceil(totalRec / recPerPage)) {
      onChangePage(curPage - 1);
    }
  };

  const incStep = () => {
    if(curPage >= 1 && curPage < Math.ceil(totalRec / recPerPage)) {
      onChangePage(curPage + 1);
    }
  };

  return (
    <div className="__pagination">
      <div className="d-flex">
        <button className="btn btn-light" onClick={jumpMinStep}>{"<<"}</button>
        <button className="btn btn-light" onClick={decStep}>{"<"}</button>
          {generatePages}
        <button className="btn btn-light" onClick={incStep}>{">"}</button>
        <button className="btn btn-light" onClick={jumpMaxStep}>{">>"}</button>
      </div>
    </div>
  );
};

export default Pagination;
