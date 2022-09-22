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
};
export default async (req, res) => {

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const Articles = db.collection("articles");

  const nPerPage = 15;
  const pageNumber = req.query.page || 1;

  const skip = (pageNumber - 1) * nPerPage;

  const countPromise = Articles.find(
    { tags: { $regex: ".*" + req.query.tag + ".*" } },
    {
      title: 1,
      category: 1,
      slug: 1,
      description: 1,
      image: 1,
      tags: 1,
      author: 1,
    }
  ).count();

  const articlesPromise = Articles.find(
    { tags: { $regex: ".*" + req.query.tag + ".*" } },
    {
      title: 1,
      category: 1,
      slug: 1,
      description: 1,
      image: 1,
      tags: 1,
      author: 1,
    }
  )
    .sort({ createdAt: -1 })
    .limit(nPerPage)
    .skip(skip)
    .toArray()

  const [count, articles] = await Promise.all([countPromise, articlesPromise]);

  const pageCount = count / nPerPage;

  return res.status(201).send({
    pagination: {
      count,
      pageCount,
    },
    articles,
  });
};
