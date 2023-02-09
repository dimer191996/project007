import axios from "axios";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Reactions = ({ article }) => {
  const [cookie, setCookie] = useCookies([]);
  const router = useRouter();
  const [reactions, setReaction] = useState(null);
  const [extendedResult, updateExtendedResult] = useState(false);
  useEffect(() => {
    if (article) {
      axios
        .get(`/api/articles/article/reactions/${article.slug}`)
        .then(({ data }) => setReaction(data))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [article]);

  async function setType(type, id, fingerprint) {
    const data = await axios
      .post("/api/articles/article/reactions/add", {
        articleId: id,
        typeOfReaction: type,
        fingerprint: fingerprint,
      })
      .then(({ data }) => {
        if (!data.error) {
          console.log("cookies fund");
          setCookie(`${type}_${id}`, JSON.stringify({ type: type, id: id }), {
            path: "/",
            maxAge: 3600, // Expires after 1hr
            sameSite: true,
          });
          return data;
        }
        console.log("somethign happen");
      })
      .catch(({ error }) => {
        console.log("error");
      });
  }

  return (
    <div>
      <div className="text-center border-b text-sm font-bold mb-4">How do you feel about this story ?</div>
      <div className="text-center">
        {!reactions ? (
          "Loading..."
        ) : (
          <div className="grid grid-cols-4 gap-2">
            {[
              { type: "like", number:reactions?.like, icon:"👍" },
              { type: "dislike", number: reactions?.dislike, icon:"😤" },
              { type: "angry" , number:reactions?.angry , icon:"😠"},
              { type: "happy",number:reactions?.happy, icon:"😃" },
            ].map((item, index) => (
              <div key={index}>
                <button
                aria-label="reaction"
                className="text-2xl"
                  onClick={() =>
                    setType(item.type, article._id)
                  }
                >
                  {item.icon} <span className="px-2">{item.number}</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reactions;
