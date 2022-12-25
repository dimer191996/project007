import clientPromise from "../../../lib/db";
const fields = {
    title: 1,
    author: 1,
    slug: 1,
    video: 1,
    createdAt: 1,
    updatedAt: 1,
    image: 1,

};
export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);
        const Articles = db.collection("articles");

        const articles = await Articles.find({}, { fields }).toArray();

        return res.status(201).send(articles);
    } catch (error) {
        console.log(error)
    }


};
