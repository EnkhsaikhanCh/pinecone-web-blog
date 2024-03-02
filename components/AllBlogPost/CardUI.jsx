import Link from "next/link";

export function CardUI({ article, hasProfile, isLoading }) {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Link
      href={article.path}
      className="flex flex-col gap-4 rounded-md border bg-white p-4 hover:border-blue-300 hover:bg-[rgba(0,0,0,.02)] hover:bg-slate-50 dark:border-[#242933] dark:bg-[#2D333B] dark:hover:border-blue-500 dark:hover:bg-[#313840]"
    >
      <img
        src={article.social_image}
        alt={article.title}
        className="aspect-video rounded-md object-cover"
      />
      <div className="col-span-2 flex h-full flex-col justify-between p-2">
        <div>
          <ArticleTags tagList={article.tag_list} />
          <h2 className="mb-5 font-bold hover:underline hover:underline-offset-2 dark:text-[#ADBAC7]">
            {article.title}
          </h2>
        </div>
        <div className="flex items-center justify-between">
          {hasProfile && <UserInfo user={article.user} />}

          <p className="text-[#ADBAC7]">{article.readable_publish_date}</p>
        </div>
      </div>
    </Link>
  );
}

const ArticleTags = ({ tagList }) => {
  return (
    <div className="mb-2 flex flex-wrap gap-2">
      {tagList.map((tag) => (
        <span
          key={tag}
          className="inline-block rounded border border-blue-100 bg-blue-200 px-[10px] py-1 text-sm text-blue-700 dark:border-blue-500 dark:bg-[#4B6BFB0D] dark:text-blue-300"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

const UserInfo = ({ user }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={user.profile_image}
        alt={user.username}
        className="h-[25px] w-[25px] rounded-full"
      />
      <p className="text-[#ADBAC7]">{user.username}</p>
    </div>
  );
};

const Loader = () => {
  return (
    <div
      role="status"
      className="w-full animate-pulse rounded border border-gray-200 p-4 dark:border-gray-700 md:p-6"
    >
      <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700"></div>
      <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mt-4 flex items-center">
        <svg
          className="me-3 h-[25px] w-[25px] text-gray-200 dark:text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div>
          <div className="mb-2 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};