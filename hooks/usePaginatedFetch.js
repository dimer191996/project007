import { useEffect, useState } from "react";
import useSWRInfinite from "swr";

function usePaginatedFetch(endpoint,category, fetcher) {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    `${endpoint}?page=${page}&category=${category}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      revalidateOnReconnect: false,
    }
  );

  const items = data ? [].concat(...data.articles) : [];

  useEffect(() => {
    if (data) {
      setPageCount(Math.round(data.pagination?.pageCount));
    }
  }, [data]);

  function handlePreviousPage() {
    setPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
  }

  function handleNextPage() {
    setPage((p) => {
      if (p === pageCount) return p;
      return p + 1;
    });
  }

  return {
    items,
    error,
    mutate,
    size,
    setSize,
    isValidating,
    page,
    pageCount,
    handlePreviousPage,
    handleNextPage,
  };
}

export default usePaginatedFetch