import clientPromise from "../../../lib/db";
const fields = {
    title: 1,
    author: 1,
    category: 1,
    slug: 1,
    video: 1,
    description: 1,
    related1: 1,
    related2: 1,
    shares: 1,
    createdAt: 1,
    image: 1,
    views: 1,
    tags: 1,
    _id: 0,  category: "$_id", articles: 1 

};
export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const Articles = db.collection("articles");

    const params = req.query.category;

    const articles = await Articles.aggregate([
        {
           $match: { category: { $in: ["tv", "short","celebrity"] } }
        },
        {
           $sort: { createdAt: -1 }
        },
        {
           $group: {
              _id: "$category",
              latestArticle: { $first: "$$ROOT" }
           }
        },
        {
           $replaceRoot: { newRoot: "$latestArticle" }
        },
        {
           $project: {
              image: 1,
              title: 1,
              description: 1,
              category:1,
              author:1,
              slug:1,
              tags: 1,
              createdAt: 1,
              updatedAt: 1
           }
        }
     ]).toArray()

  

    return res.status(201).send({ articles });
};
