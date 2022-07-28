import Image from "next/image";
import style from "./style.module.css";
export default function RoundedImg({ src, alt }) {
  return (
    <div className={style.imgConteiner}>
      <Image
        width="180px"
        height="180px"
        alt={alt}
        src={src}
        className={style.rounded}
      ></Image>
    </div>
  );
}
