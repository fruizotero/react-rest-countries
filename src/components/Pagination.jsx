/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Pagination} from "@mui/material";

import "./Pagination.css";

const PaginationElements = ({ data, itemsPerPage, Render }) => {
  const [page, setPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

 

  useEffect(() => {
    setPage(1);
    setPaginatedData(data.slice(0, itemsPerPage));
  }, [data, itemsPerPage]);

  const handleChange = (event, value) => {
    setPage(value);
    const begin = (value - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    setPaginatedData(data.slice(begin, end));
  };

  return (
    <article className="pagination-container">
      {<Render currentItems={paginatedData} />}
        <Pagination className="pagination"
        
          count={Math.ceil(data.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
        />
      
    </article>
  );
};

export default PaginationElements;
