import style from "./CV.module.css";
import { useContext } from "react";
import { PageContext } from "../CV-context";

export default function CV() {
  const { setIsCV } = useContext(PageContext);
  return (
    <div className={style.container}>
      <button onClick={() => setIsCV(false)}>BACK</button>
    </div>
  );
}
