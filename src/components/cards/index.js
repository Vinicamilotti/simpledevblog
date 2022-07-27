import style from "../../../styles/Cards.module.css";
import Link from "../link";
export default function Card({ item, path }) {
  return (
    <Link href={path}>
      <li key={item.title} className={style.card}>
        <div className={style.cardContent}>
          <p className={style.date}>{item.date}</p>
          <h1 className={style.title}>{item.title}</h1>
          <h2 className={style.author}>{item.author}</h2>
          <p className="desc">{item.desc}</p>
        </div>
      </li>
    </Link>
  );
}
