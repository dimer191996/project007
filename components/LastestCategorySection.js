import Link from "next/link";
import ArticleMainImage from "./ArticleMainImage"
import ArticleTags from "./ArticleTags"

const LastestCategorySection = ({articles, loading})=>{
    if (loading) {
        return (
          <div className="mt-4 mx-5 mb-3">
            <div className="">
              {[1].map((data, index) => (
                <div
                  key={index}
                  className=" snap-center flex-none  h-64 w-full rounded overflow-hidden m-2  "
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
          </div>
        );
      }

    return(  <div className="flex justify-center">
    <div className="md:flex w-full lg:w-3/4 p-2 ">
      <div className=" md:w-1/2 ">
        <Link href={`/article/${articles[0]?.slug}`} className="">
          <card className="w-full flex flex-col">
            <div className="relative md:h-[23rem] h-[11rem] ">
              <ArticleMainImage article={articles[0]} />
              <div className="absolute w-full h-full bg-gradient-to-t from-black"></div>
              <div className="absolute right-2 bottom-2 pl-2">
                <ArticleTags tagsN={1} t={articles[0]?.tags} />
                <h2 className=" leading-tight line-clamp-3 cursor-pointer  text-xl font-bold text-white">
                  {articles[0]?.title}
                </h2>
              </div>
            </div>
          </card>
        </Link>
      </div>
      <div className="md:mx-1 md:w-1/2 ">
      <Link href={`/article/${articles[2]?.slug}`} className="">
        <card className="w-full flex flex-col">
          <div className="relative h-[11rem] md:h-[23rem] ">
            <ArticleMainImage article={articles[2]} />
            <div className="absolute w-full h-full bg-gradient-to-t from-black"></div>
            <div className="absolute right-2 bottom-2 pl-2">
              <ArticleTags tagsN={1} t={articles[2]?.tags} />
              <h2 className=" leading-tight line-clamp-3 cursor-pointer  text-xl font-bold text-white">
                {articles[2]?.title}
              </h2>
            </div>
          </div>
        </card>
        </Link>
      </div>
      <div className=" flex flex-col justify-center items-center md:w-1/2 ">
        <div className="w-full">
        <Link href={`/article/${articles[3]?.slug}`} className="">
          <card className="w-full flex flex-col">
            <div className="relative md:mb-1 h-[11rem] ">
              <ArticleMainImage article={articles[3]} />
              <div className="absolute w-full h-full bg-gradient-to-t from-black"></div>
              <div className="absolute right-2 bottom-2 pl-2">
                <ArticleTags tagsN={1} t={articles[3]?.tags} />
                <h2 className=" leading-tight line-clamp-3 cursor-pointer  text-lg font-bold text-white">
                  {articles[3]?.title}
                </h2>
              </div>
            </div>
          </card>
          </Link>
        </div>
        <div className=" w-full">
        <Link href={`/article/${articles[1]?.slug}`} className="">
          <card className="w-full flex flex-col">
            <div className="relative md:mt-1 h-[11rem] ">
              <ArticleMainImage article={articles[1]} />
              <div className="absolute w-full h-full bg-gradient-to-t from-black"></div>
              <div className="absolute right-2 bottom-2 pl-2">
                <ArticleTags tagsN={1} t={articles[1]?.tags} />
                <h2 className=" leading-tight line-clamp-3 cursor-pointer  text-lg  font-bold text-white">
                  {articles[1]?.title}
                </h2>
              </div>
            </div>
          </card>
          </Link>
        </div>
      </div>
    </div>
  </div>)

}

export default LastestCategorySection