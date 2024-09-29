import { Link, Outlet } from "react-router-dom";

import style from "./Createpage.module.css";

export default function Createpage() {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <h1>Create Your CV</h1>
        <Link className={style.link} to="/">
          Homepage
        </Link>
      </div>
      <div className={style.main}>
        <div className={style.content}>
          <Outlet />
          <div className={style.buttons}>
            <button>Previous</button>
            <button>Next</button>
          </div>
          <div className={style.pageCounter}>
            <h3>Page 1 of 3</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
