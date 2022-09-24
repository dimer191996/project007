import clientPromise from "../../../../lib/db";
export default async (req, res) => {

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const Article = db.collection("articles");
  await Article.updateOne({ slug: req.query.slug }, { $inc: { views: 1 } });
  
  console.log("article");
  const article = await Article.findOne({ slug: req.query.slug });
  if (article) {
    return res.status(201).send({ article });
  } else {
    return res.status(404).send({ article });
  }

};
