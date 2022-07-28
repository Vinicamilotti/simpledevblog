import style from "./style.module.css";
export default function CodeSpnippet({ lang, children }) {
  return (
    <div className={style.codeConteiner}>
      <div className={style.lang}>
        <p>{lang}</p>
      </div>
      <div className={style.code}>
        <p>{children}</p>
      </div>
    </div>
  );
}
