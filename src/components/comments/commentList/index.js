import style from "./style.module.css";
import { useEffect, useState } from "react";
export default function CommentList({ pageId }) {
  const [comments, setComments] = useState([""]);
  useEffect(() => {
    fetch(`/api/${pageId}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, [pageId]);
  console.log(comments);
  return (
    <div className={style.commentConteiner}>
      <ul className={style.commentList}>
        {comments.map((item, index) => {
          return (
            <li key={index} className={style.commentItem}>
              <div className={style.commentBox}>
                <div className={style.name}>
                  <h3>{item.author}</h3>
                </div>
                <div className={style.comment}>
                  <p>{item.comment}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
