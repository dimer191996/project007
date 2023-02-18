import clientPromise from "../../../../../../lib/db";
const fields = {
  title: 1,
  slug: 1,
};
export default async (req, res) => {

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const Article = db.collection("articles");

  const checked_tag = req.query.tag.toString();
  
  const articles = await Article.find({
    $or: [
      { title: { $regex: checked_tag, $options: 'i' } },
      { tags: { $regex: checked_tag, $options: 'i' } }
    ]
  }, { title: 1, slug: 1, tags: 1 }).sort({createdAt:-1}).limit(6).toArray();

  console.log(checked_tag);
  return res.status(201).send({ articles });

};
