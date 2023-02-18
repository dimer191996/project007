import clientPromise from "../../../../../lib/db";
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
};
export default async (req, res) => {

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const Article = db.collection("articles");
  const articles = await Article.find(
    {
      category: req.query.category.toString(),
    },
    fields
  )
    .sort({
      createdAt: -1,
    })
    .skip(6)
    .limit(18)
    .toArray()

  return res.status(201).send({ articles });

};
