export function Loading() {
  return (
    <div className="container mx-auto my-auto flex items-center justify-center">
      <button
        disabled
        type="button"
        className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-center text-sm font-medium text-black focus:ring-4 focus:ring-blue-300 dark:bg-[#262A33] dark:text-white"
        aria-label="Loading, please wait."
      >
        <svg
          aria-hidden="true"
          role="status"
          viewBox="0 0 100 101"
          className="mr-2 inline h-4 w-4 animate-spin text-black dark:text-white"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.59c0 27.615-22.386 50.001-50 50.001s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50Zm-90.919 0c0 22.6 18.32 40.92 40.919 40.92 22.599 0 40.919-18.32 40.919-40.92 0-22.598-18.32-40.918-40.919-40.918-22.599 0-40.919 18.32-40.919 40.919Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.968 39.04c2.425-.636 3.894-3.128 3.04-5.486A50 50 0 0 0 41.735 1.279c-2.474.414-3.922 2.919-3.285 5.344.637 2.426 3.12 3.849 5.6 3.484a40.916 40.916 0 0 1 44.131 25.769c.902 2.34 3.361 3.802 5.787 3.165Z"
            fill="currentColor"
          />
        </svg>
        Loading...
      </button>
    </div>
  );
}
