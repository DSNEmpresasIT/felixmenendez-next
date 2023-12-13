"use client"
import React, { useState, useEffect } from 'react';

const CustomPagination = ({ pageCount, onPageChange }: any) => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageClick = (page: any) => {
    if (page === 'start') {
      setCurrentPage(0);
    } else if (page === 'end') {
      setCurrentPage(pageCount - 1);
    } else {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 5;
    const halfVisiblePages = Math.floor(visiblePages / 2);


    let startPage = Math.max(0, currentPage - halfVisiblePages);
    let endPage = Math.min(pageCount - 1, startPage + visiblePages - 1);

    while (endPage - startPage + 1 < visiblePages && startPage > 0) {
      startPage--;
    }

    if (startPage > 0) {
      pageNumbers.push(
        <li key="ellipsis-start" onClick={() => handlePageClick('start')}>
          ...
        </li>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          onClick={() => handlePageClick(i)}
          className={currentPage === i ? 'active' : ''}
        >
          <a>{i + 1}</a>
        </li>
      );
    }

    if (endPage < pageCount - 1) {
      pageNumbers.push(
        <li key="ellipsis-end" onClick={() => handlePageClick('end')}>
          ...
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 0}>
        <span className='icofont-swoosh-left'></span>
      </button>
      {renderPageNumbers()}
      <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === pageCount - 1}>
        <span className='icofont-swoosh-right'></span>
      </button>
    </div>
  );
};

export default CustomPagination;



