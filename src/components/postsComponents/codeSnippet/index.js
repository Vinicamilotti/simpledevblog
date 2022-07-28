import CopyButton from "./copyButton";
import style from "./style.module.css";
export default function CodeSpnippet({ lang, children }) {
  return (
    <div className={style.Conteiner}>
      <div className={style.codeConteiner}>
        <div className={style.lang}>
          <p>{lang}</p>
        </div>
        <div className={style.codeBox}>
          <div className={style.code}>
            <p>{children}</p>
          </div>
          <div className={style.copy}>
            <CopyButton text={children}></CopyButton>
          </div>
        </div>
      </div>
    </div>
  );
}
