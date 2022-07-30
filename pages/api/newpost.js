import Comment from "../../src/utils/models/comment";
const newcomment = new Comment();
export default async function newPost(req, res) {
  if (req.method == "POST") {
    const name = req.body.name;
    const post = req.body.post;
    const comment = req.body.comment;
    const createComent = await newcomment.newComment(post, name, comment);
    res.status(203).json(createComent);
  }
}
