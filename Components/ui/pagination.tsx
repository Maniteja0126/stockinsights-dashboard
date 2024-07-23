

import React from "react";
import { Button } from "./button"; 

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pagesToShow = 3; 
  const delta = Math.floor(pagesToShow / 2);
  let startPage = Math.max(1, currentPage - delta);
  let endPage = Math.min(totalPages, currentPage + delta);

  if (totalPages > pagesToShow) {
    if (currentPage <= delta) {
      endPage = pagesToShow;
    } else if (currentPage + delta >= totalPages) {
      startPage = totalPages - pagesToShow + 1;
    }
  }

  const handlePageChange = (pageNumber: number) => () => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <nav className="flex justify-center items-center space-x-2 mt-4">
      <Button
        variant="ghost"
        onClick={handlePageChange(1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </Button>
      <Button
        variant="ghost"
        onClick={handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lsaquo;
      </Button>
      {startPage > 1 && (
        <>
          <Button variant="ghost" onClick={handlePageChange(1)}>
            1
          </Button>
          {startPage > 2 && <span className="mx-1">...</span>}
        </>
      )}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map(page => (
        <Button
          key={page}
          variant={currentPage === page ? "outline" : "ghost"}
          onClick={handlePageChange(page)}
        >
          {page}
        </Button>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="mx-1">...</span>}
          <Button variant="ghost" onClick={handlePageChange(totalPages)}>
            {totalPages}
          </Button>
        </>
      )}
      <Button
        variant="ghost"
        onClick={handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &rsaquo;
      </Button>
      <Button
        variant="ghost"
        onClick={handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </Button>
    </nav>
  );
};

export default Pagination;
