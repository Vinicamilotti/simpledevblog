import React, { useState } from "react";
import style from "./style.module.css";
function MyApp({ text }) {
  const [copySuccess, setCopySuccess] = useState(null);
  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <button onClick={(e) => copyToClipBoard(text)} className={style.button}>
      Copiar
    </button>
  );
}

export default MyApp;
