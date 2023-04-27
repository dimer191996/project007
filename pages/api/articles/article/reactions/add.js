import { ObjectId } from "mongodb";
import clientPromise from "../../../../../lib/db";
export default async (req, res) => {

  const {articleId , typeOfReaction, fingerprint} = req.body;
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const Reaction = db.collection("reactions");
  const Article = db.collection("articles");
  console.log(`${articleId}_${typeOfReaction}`)
  const article = await Article.findOne({ _id: new ObjectId(articleId) });

  try {
    if (article) {
      console.log("got it");
       await Reaction.insertOne({
        fingerprint:fingerprint,
        article_id: article._id,
        type: typeOfReaction,
        createdAt: new Date()
      });
      console.log("done")
      return res
        .status(201)
        .send({
          message: "Perfect ! Reaction added , lol",
          error: false,
          type: "success",
          error_message: "",
        });
    }
    return res
      .status(201)
      .send({
        message: "The article you are trying to react to doesn't exist.",
        error: false,
        type: "warning",
        error_message: "",
      });
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .send({
        message: "Error Find",
        error: true,
        type: "error",
        error_message: error,
      });
   }
};
