import React, { useState } from "react";

export function LoadNext({ articles, setArticles }) {
  const [currentPage, setCurrentPage] = useState(1);

  const username = "simonholdorf";
  const apiUrl = `https://dev.to/api/articles?username=${username}&per_page=`;
  const itemsPerPage = 9;

  function loadNext() {
    fetch(`${apiUrl}${itemsPerPage}&page=${currentPage + 1}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles([...articles, ...data]);
        setCurrentPage(currentPage + 1);
      });
  }

  return (
    <div className="mb-[70px] flex items-center justify-center">
      <button
        className="rounded-md border bg-slate-50 px-4 py-2 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
        onClick={loadNext}
      >
        Load more
      </button>
    </div>
  );
}