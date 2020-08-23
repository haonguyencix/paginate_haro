import React, { useState, Fragment } from "react";
import ScrollTableWrapper from "../ScrollTableWrapper";
import Pagination from "../Paginate";
// import CompatibleHeight from '../CompatibleHeight'
import styles from './style.module.css'

const tbodyArr = [
  { no: 1, name: "Haro - Hảo Nguyễn", position: "Frontend Developer" },
  { no: 2, name: "Haro - Hảo Nguyễn", position: "Frontend Developer" },
  { no: 3, name: "Haro - Hảo Nguyễn", position: "Frontend Developer" },
  { no: 4, name: "Haro - Hảo Nguyễn", position: "Frontend Developer" },
  { no: 5, name: "Haro - Hảo Nguyễn", position: "Frontend Developer" },
  { no: 6, name: "Haro - Hảo Nguyễn", position: "Frontend Developer" },
  { no: 7, name: "Haro - Hảo Nguyễn", position: "Frontend Developer" },
  { no: 8, name: "Haro - Hảo Nguyễn", position: "Frontend Developer" },
  { no: 9, name: "Haro - Hảo Nguyễn", position: "Frontend Developer" },
  { no: 10, name: "Haro - Hảo Nguyễn", position: "Frontend Developer" },
  { no: 11, name: "Haro - Hảo Nguyễn", position: "Frontend Developer" },
  { no: 12, name: "Haro - Hảo Nguyễn", position: "Frontend Developer" },
  { no: 13, name: "Haro - Hảo Nguyễn", position: "Frontend Developer" },
]

const ScrollTable = () => {
  const [page, setPage] = useState(1);

  const recPerPage = 10

  const handlePaginate = (array, pageSize, pageNum = 1) => array.slice((pageNum - 1) * pageSize, pageNum * pageSize)
  
  const generateTableBody = handlePaginate(tbodyArr, recPerPage, page).map((val, idx) => (
    <tr key={`table-row-${idx}`}>
      <td>{val.no}</td>
      <td>{val.name}</td>
      <td>{val.position}</td>
    </tr>
  ));

  return (
    <Fragment>
      <div className="my-5">
        <button className="btn btn-danger">Top area</button>
      </div>
      <div className="card">
        <div className="card-body">
          <button className="btn btn-success">Hello</button>
          <ScrollTableWrapper>
            <table className={`table table-bordered mb-0 ${styles.TableHeadFixed}`}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {generateTableBody}
              </tbody>
            </table>
          </ScrollTableWrapper>
        </div>
      </div>
      <div className="my-5 d-flex justify-content-end">
        <Pagination
          curPage={page}
          totalRec={tbodyArr.length}
          recPerPage={recPerPage}
          maxPageDisplay={10}
          onChangePage={(page) => setPage(page)}
        />
      </div>
    </Fragment>
  );
};

export default ScrollTable;
