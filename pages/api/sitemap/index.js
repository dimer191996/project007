import axios from "axios";
export default function handler(req, res) {
  const data = axios
    .get("https://hot-seat-app.herokuapp.com/api")
    .then(({ data }) => {
      return data;
    });

  res.status(200).json({ data });
}
