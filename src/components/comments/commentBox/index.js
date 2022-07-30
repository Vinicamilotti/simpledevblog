import { useState } from "react";
import style from "./style.module.css";
import axios from "axios";

export default function CommentBox({ pageId }) {
  const [name, setName] = useState([""]);
  const [comment, setComment] = useState([""]);
  const sendComment = async (e) => {
    e.preventDefault();
    const data = { post: pageId, name: name, comment: comment };
    console.log(data);
    await axios.post("/api/newpost", data);
    //window.location.reload(false);
  };
  return (
    <div className={style.formConteiner}>
      <form
        className={style.form}
        onSubmit={(e) => {
          sendComment(e);
        }}
      >
        <label>
          Nome:
          <input
            className={style.input}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome!"
          ></input>
        </label>
        <label>
          Comentário:
          <textarea
            onChange={(e) => setComment(e.target.value)}
            className={style.textarea}
          ></textarea>
        </label>
        <button className={style.button}>Comentar!</button>
      </form>
    </div>
  );
}
