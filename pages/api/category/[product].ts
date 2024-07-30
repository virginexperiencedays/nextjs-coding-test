import Cors from "cors";
import { runMiddleware } from "@/utils/runMiddleware";
import { connect } from "@/db/db";

const cors = Cors({
  methods: ["GET", "POST", "PUT", "DELETE"],
  origin: "*",
});

const SECRET = 'mY53cR3t';

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method !== "GET") {
    return res.status(200).json({});
  }

  if (req.query.secret !== SECRET) {
    return res.status(200).json({});
  }

  const productId = req.query.product[0];
  const conn = await connect();
  const category = await conn.request(`SELECT * FROM categories WHERE productId = ${productId}`);

  if (!category) {
    return res.status(200).json(null);
  }

  conn.close();
  return res.status(200).json(category);
}
