import axios from "axios";
import React from "react";
import ArticleCard2 from "../../components/ArticleCard2";
import ArticlesSection2 from "../../components/ArticlesSection2";
import SeoPage from "../../components/SeoPage";

export async function getServerSideProps({ params }) {
  const articles = await axios
    .get(
      `${"https://hot-seat-app.herokuapp.com/api/"}tag/articles/` + params.tag,
      {
        timeout: 10000,
      }
    )
    .then((res) => res.data.articles)
    .catch(({ err }) => console.log(err));

  return {
    props: {
      articles: articles || [],
      param: params.tag,
    },
  };
}

const articles = ({ articles, param }) => {
  return (
    <SeoPage
      article={articles[0]}
      description={articles[0]?.description}
      hearder={param.replace(/-/g, " ") + " | HotSeatMag"}
      category={"empty"}
      title={param.replace(/-/g, " ") + " | HotSeatMag "}
    >
      <section className="">
        <div className=" flex flex-col justify-center items-center text-center h-32">
          <h1 className=" mb-2 font-semibold text-2xl">Tags</h1>

          <h2 className=" font-black text-3xl uppercase">
            {param.replace(/-/g, " ")}
          </h2>
        </div>
        <div className=" md:flex justify-center my-5 ">
          <div className="md:flex flex-row justify-center w-full lg:w-2/3 md:mx-4 ">
            <div className="md:w-3/4  mx-4">
              <div className=" md:grid grid-cols-1 gap-4 mb-5">
                {articles.slice(0, 1).map((article) => (
                  <ArticleCard2 article={article} />
                ))}
              </div>
              <ArticlesSection2 tagPage={true} articles={articles.slice(1)} />
            </div>
          </div>
        </div>
      </section>
    </SeoPage>
  );
};

export default articles;
