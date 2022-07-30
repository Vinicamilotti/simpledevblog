import style from "./style.module.css";
export default function CommentList({ comments }) {
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
