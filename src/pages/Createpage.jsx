import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import style from "./Createpage.module.css";

export default function Createpage() {
  const [selected, setSelected] = useState(1);

  function handleLink(value) {
    setSelected(value);
    console.log(selected);
  }

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <h1>Create Your CV</h1>
        <Link className={style.link} to="/">
          Homepage
        </Link>
      </div>
      <div className={style.main}>
        <div className={style.progress}>
          <ul>
            <li
              className={selected === 1 ? style.selected : ""}
              onClick={() => handleLink(1)}
            >
              <Link to="personalInformations">1</Link>
            </li>
            <li
              className={selected === 2 ? style.selected : ""}
              onClick={() => handleLink(2)}
            >
              <Link to="education">2</Link>
            </li>
            <li
              className={selected === 3 ? style.selected : ""}
              onClick={() => handleLink(3)}
            >
              <Link to="experience">3</Link>
            </li>
          </ul>
        </div>
        <div className={style.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
