import clientPromise from "../../../../../lib/db";
import Cookies from "js-cookie";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const Article = db.collection("articles");

  try {
    const reactions = await Article.aggregate([
      {
        $match: {
          slug:  req.query.slug
        }
      },
      {
        $lookup: {
          from: "reactions",
          localField: "_id",
          foreignField: "article_id",
          as: "reactions"
        }
      },
      {
        $project: {
          reactions: {
            $reduce: {
              input: "$reactions",
              initialValue: {
                like: 0,
                dislike: 0,
                angry:0,
                happy:0
              },
              in: {
                like: {
                  $cond: [
                    {
                      $eq: [
                        "$$this.type",
                        "like"
                      ]
                    },
                    {
                      $add: [
                        "$$value.like",
                        1
                      ]
                    },
                    "$$value.like"
                  ]
                },
                dislike: {
                  $cond: [
                    {
                      $eq: [
                        "$$this.type",
                        "dislike"
                      ]
                    },
                    {
                      $add: [
                        "$$value.dislike",
                        1
                      ]
                    },
                    "$$value.dislike"
                  ]
                },
                angry: {
                  $cond: [
                    {
                      $eq: [
                        "$$this.type",
                        "angry"
                      ]
                    },
                    {
                      $add: [
                        "$$value.angry",
                        1
                      ]
                    },
                    "$$value.angry"
                  ]
                },
                happy: {
                  $cond: [
                    {
                      $eq: [
                        "$$this.type",
                        "happy"
                      ]
                    },
                    {
                      $add: [
                        "$$value.happy",
                        1
                      ]
                    },
                    "$$value.happy"
                  ]
                }
              }
            }
          }
        }
      }
    ]).toArray()
    return res.status(201).send({ ...reactions[0].reactions });
  } catch (error) {
    console.log(error);
  }
};
