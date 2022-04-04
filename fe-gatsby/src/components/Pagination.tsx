import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
  pageSize: number
  totalCount: number
  currentPage: number
  skip: number
  base: string
}

export const Pagination: React.VFC<PaginationProps> = ({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;
  const prevActiveStyle = hasPrevPage ? {cursor: "pointer"} : {cursor: "not-allowed"}
  const nextActiveStyle = hasNextPage ? {cursor: "pointer"} : {cursor: "not-allowed"}

  return (
    <PaginationStyles>
      <Link activeStyle={prevActiveStyle} to={`${base}/${prevPage}`}>
        ← Prev
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          className={currentPage === 1 && i === 0 ? 'current' : ''}
          to={`${base}/${i > 0 ? i + 1 : ''}`}
          key={i}
        >
          {i + 1}
        </Link>
      ))}
      <Link activeStyle={nextActiveStyle} to={`${base}/${nextPage}`}>
        Next →
      </Link>
    </PaginationStyles>
  );
}

const PaginationStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  text-align: center;
  border: 1px solid var(--grey);
  margin: 2rem 0;
  border-radius: 5px;
  > * {
    padding: 1rem;
    flex: 1;
    margin: 0;
    border-right: 1px solid var(--grey);
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--red);
    }
    &[disabled] {
      pointer-events: none;
      color: var(--grey);
    }
  }
`;
