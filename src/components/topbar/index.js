import TopButton from "./buttons";
import style from "../../../styles/TopBar.module.css";
export default function TopBar() {
  return (
    <div className={style.topBarConteiner}>
      <ul className={style.topNav}>
        <TopButton href="/" name="Home" icon="fa-solid fa-house-blank" />
        <TopButton href="/author" name="Sobre" />
        <TopButton href="https://github.com/Vinicamilotti" name="GitHub" />
      </ul>
    </div>
  );
}
