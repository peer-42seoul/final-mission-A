import { Pagination } from "@mui/material";
import React from "react";


export default function QuestionPagination({totalPage, page, setPage}: {totalPage: number, page: number, setPage: React.Dispatch<React.SetStateAction<number>>}) {
  const handlePageChange= (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage - 1);
  };
  
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px',
        paddingBottom: '30px',
      }}>
      <Pagination count={totalPage} page={page + 1} onChange={handlePageChange} showFirstButton showLastButton />
    </footer>
  );
}