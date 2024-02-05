import { Header } from "./Header/Header";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { Loading } from "./Loading";
import { Footer } from "./Footer";

export function SinglePost({ tags }) {
  const [article, setArticle] = useState();
  const router = useRouter();

  useEffect(() => {
    if (router.query.username && router.query.slug) {
      fetch(
        `https://dev.to/api/articles/${router.query.username}/${router.query.slug}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setArticle(data);
        });
    }
  }, [router.query]);

  console.log(router.query);

  if (article === undefined) return <Loading />;

  return (
    <>
      <Header />
      <div className="bg-[#f5f5f5] py-[30px]">
        <div className="container mx-auto flex w-[800px] flex-col gap-[15px] rounded-md bg-white pb-4">
          <img
            src={article.cover_image}
            alt=""
            className="aspect-video h-[400px] w-[800px] rounded-md object-cover"
          />
          <div className="mx-3 flex flex-col gap-5">
            <div className="flex items-center justify-between gap-6 rounded-md bg-gray-100 px-5 py-2 text-[#696A75]">
              <div className="flex items-center justify-center gap-4">
                <img
                  src={article.user.profile_image}
                  alt=""
                  className="h-[35px] w-[35px] rounded-full"
                />
                <p>{article.user.username}</p>
              </div>
              <p>{article.readable_publish_date}</p>
            </div>
            <h1 className="text-center text-4xl	font-bold">{article.title}</h1>
          </div>
          <div className="prose mx-auto">{parse(article.body_html)}</div>
        </div>
      </div>
      <Footer/>
    </>
  );
}