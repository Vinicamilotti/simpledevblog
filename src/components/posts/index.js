import { MDXRemote } from "next-mdx-remote";
import style from "../../../styles/Posts.module.css";
import CodeSnippet from "../postsComponents/codeSnippet";
import RoundedImg from "../postsComponents/roudedImg";
import CheckList from "../postsComponents/checkList";
import CommentBox from "../comments/commentBox";
import CommentList from "../comments/commentList";
const components = { CodeSnippet, RoundedImg, CheckList };
export default function Posts({ title, author, date, content, id }) {
  console.log(id);
  return (
    <>
      <div className={style.postConteiner}>
        <div className={style.head}>
          <h1 className={style.postTitle}>{title}</h1>
          <h2 className={style.postAuthor}>por: {author}</h2>
          <label className={style.postDate}>{date}</label>
        </div>
        <div className={style.post}>
          <article className={style.postContent}>
            <MDXRemote {...content} components={components} />
          </article>
        </div>
        <hr></hr>
        <h2>Comentários</h2>
        <CommentList pageId={id} />
        <CommentBox pageId={id}></CommentBox>
      </div>
    </>
  );
}
