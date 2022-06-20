import axios from "axios";
import ArticleCard2 from "../../components/ArticleCard2";
import PageLayout from "../../Layouts/PageLayout";

export default function HomeTv({ realityTv }) {
  return (
    <div className=" my-10">
      <PageLayout
        category="none"
        articles={realityTv}
        hearder={"TLC Tv Shows & Other Reality TV"}
        pageDescription={
          " The latest and breaking reality TV news, in-depth reports, recaps, reviews, episode summaries, and info on the biggest reality television shows."
        }
        topics={[
          {
            label: "<<",
            link: "/",
          },
          {
            label: "TLC & 90 Day Fiance",
            link: "/reality-tv/tlc-&-90-day-fiance",
          },
          // {
          //   label: "Married at First Sight ",
          //   link: "/reality-tv/married-at-first-sight",
          // },
        ]}
      />
    </div>
  );
}
export async function getServerSideProps() {
  const realityTv = await axios
    .get(`${"https://hot-seat-app.herokuapp.com/api/"}articles/tv`, {
      timeout: 10000,
    })
    .then((res) => res.data.articles)
    .catch((error) => {
      console.log(error.message);
    });

  return {
    props: {
      realityTv: realityTv || [],
    },
  };
}
