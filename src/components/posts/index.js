import { MDXRemote } from "next-mdx-remote";
import style from "../../../styles/Posts.module.css";
import Image from "next/image";
export default function Posts({ title, author, date, content }) {
  const components = { Image };
  console.log(title);
  return (
    <>
      <div className={style.postConteiner}>
        <h1 className={style.postTitle}>{title}</h1>
        <h2 className={style.postAuthor}>por: {author}</h2>
        <label className={style.postDate}>{date}</label>
        <article className={style.postContent}>
          <MDXRemote {...content} components={components} />
        </article>
      </div>
    </>
  );
}
