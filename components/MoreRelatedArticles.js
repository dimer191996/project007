import axios from "axios";
import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import moment from "moment";
import Link from "next/link";
import ArticleCard2 from "./ArticleCard2";

export default function MoreRelatedArticles({ tags , currentArticle }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if(tags){    
      let randomWord;
      const tagsArray= tags.match(/[^,]+/g); // Match one or more comma-separated tags
      const lastTag = tagsArray[tagsArray.length - 1].trim().replace(/-/g, ' ');
      const words = lastTag.split(' '); // Split the last tag into an array of words
      if (words.length === 1) {
        randomWord = words[0];
      } else {
        const randomIndex = Math.floor(Math.random() * words.length); // Generate a random index
        randomWord = words[randomIndex]; // Select a random word from the array
      }
      axios
        .get(`${"/api/articles/article/more/related/"}${randomWord}`)
        .then(({ data }) => {
          setArticles(data.articles);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(null);
        });
    }
  }, [tags]);

  return (
    <div>
      {loading && (
        <div className=" grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 mb-10">

          {[1, 2, 3, 4].map((data, index) => (
            <div
              key={index}
              className=" snap-center flex-none  h-64 w-auto rounded overflow-hidden m-2  "
            >
              <div class="py-1">
                <div class="animate-pulse flex space-x-4">
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-64 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      )}

      <nav aria-label="Posts" className=" grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-4 mb-10">

        {articles.map((el, index) => (
          el.title !== currentArticle ? <SmallCard showIMG={false} key={index} article={el} />:""
          
        ))}

      </nav>
    </div>
  );
}
