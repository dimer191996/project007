import axios from "axios";

import SeoPage from "../components/SeoPage";
import ArticleCard2 from "../components/ArticleCard2";
import ArticlesSection from "../components/ArticlesSection";
import WithScreen from "../Layouts/WithScreen";

export async function getServerSideProps() {
  const articles = await axios
    .get(`${"https://hot-seat-app.herokuapp.com/api/hot/"}articles?page=0`, {
      timeout: 10000,
    })
    .then((res) => res.data.articles)
    .catch((error) => {
      console.log(error.message);
    });
  if (!articles) {
    return {
      props: {
        notfound: true,
        articles: [],
      },
    };
  }
  return {
    props: {
      articles: articles || [],
    },
  };
}

export default function Home({ articles }) {
  return (
    <SeoPage
      description={
        "   Your source for Entertainment news, Stories , Celebrities, Reality Tv more...!"
      }
      article={articles[0]}
      hearder={
        " Your source for entertainment , celebrities ,Reality Tv , and much more"
      }
      category={"none"}
    >
      <section className="">
        <div className=" my-5">
          <div className=" separator text-left">
            <h1 className=" text-4xl font-bold">
              #1 MOVIE, TV NEWS & STORIES WEBSITE
            </h1>
          </div>
        </div>
        <div className=" md:flex justify-center my-5 ">
          <div className=" w-full lg:w-2/3 px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              {articles?.slice(0, 4).map((data, index) => (
                <ArticleCard2 key={data._id} h={96} article={data} />
              ))}
            </div>
          </div>
        </div>
        <p className=" px-4 font-semibold text-2xl my-5 pb-5 text-center">
          Your source for Entertainment news, Stories ,<br /> Celebrities,
          Reality Tv news , and much more...!
        </p>{" "}
        <WithScreen width=" w-full px-2 lg:w-1/2">
          <div className=" mb-5">
            <div className=" separator text-left">
              <h1 className=" text-4xl font-bold">Latest</h1>
            </div>
          </div>
          <div className=" text-center">
            {!articles.length && "Please wait we're loading your data"}
          </div>
          <ArticlesSection articles={articles?.slice(4, 10)} />

          <ArticlesSection articles={articles?.slice(10, 16)} />

          <ArticlesSection articles={articles?.slice(16, 21)} />

          <ArticlesSection articles={articles?.slice(21, 35)} />

          <ArticlesSection articles={articles?.slice(35, 49)} />
        </WithScreen>
      </section>
    </SeoPage>
  );
}
