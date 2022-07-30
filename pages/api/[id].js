import Comment from "../../src/utils/models/comment";
export default async function getComments(req, res) {
  const comments = new Comment();
  const { id } = req.query;
  const data = await comments.getComments(id);
  res.status(200).json(data);
}
