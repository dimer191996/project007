import clientPromise from "../../../../../../lib/db";

const fields = {
  title: 1,
  slug: 1,
  image:1,
  tags:1,
  description:1
};

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const Article = db.collection("articles");

  const checked_tag = req.query.tag.toString();
  const nPerPage = 5;
  const pageNumber = req.query.page || 1;
  const skip = (pageNumber - 1) * nPerPage;

  const countPromise = Article.find({
    $or: [
      { tags: { $regex: checked_tag, $options: "i" } },
    ],
  }).count();

  const articlesPromise = Article.find(
    {
      $or: [
        { tags: { $regex: checked_tag, $options: "i" } },
      ],
    },
    
  )
  .project(fields)
    .sort({ createdAt: -1 })
    .limit(nPerPage)
    .skip(skip)
    .toArray();

  const [count, articles] = await Promise.all([countPromise, articlesPromise]);

  const pageCount = Math.ceil(count / nPerPage);
  const remainingPages = pageCount - pageNumber;

  return res.status(201).send({
    pagination: {
      count,
      pageCount,
      remainingPages,
    },
    articles,
  });
};
