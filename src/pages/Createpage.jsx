import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./Createpage.module.css";

export default function Createpage() {
  const pages = ["personalInformations", "education", "experience"];
  const [pageIndex, setPageIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (pageIndex < pages.length - 1) {
      const newIndex = pageIndex + 1;
      setPageIndex(newIndex);
      navigate(`/create/${pages[newIndex]}`);
    }
  };

  const handlePrevious = () => {
    if (pageIndex > 0) {
      const newIndex = pageIndex - 1;
      setPageIndex(newIndex);
      navigate(`/create/${pages[newIndex]}`);
    }
  };

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
            <button onClick={handlePrevious} disabled={pageIndex === 0}>
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={pageIndex === pages.length - 1}
            >
              Next
            </button>
          </div>
          <div className={style.pageCounter}>
            <h3>
              Page {pageIndex + 1} of {pages.length}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
