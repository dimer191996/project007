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
  
  const article = await Article.findOne(
    {
      slug: req.query.article.toString(),
    },
    fields
    )
  
  return res.status(201).send({ article });

};
