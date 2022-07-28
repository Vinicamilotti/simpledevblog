import Head from "next/head";
import Link from "../../link";
import style from "./sytle.module.css";

export default function TopButton({ name, href }) {
  return (
    <>
      <Link href={href}>
        <li key={name} className={style.button}>
          {name}
        </li>
      </Link>
    </>
  );
}
