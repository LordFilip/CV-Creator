import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import style from "./Createpage.module.css";
import { PageContext } from "../CV-context";
import CV from "./CV";

export default function Createpage() {
  const { formData } = useContext(PageContext);

  const { isCV, setIsCV } = useContext(PageContext);

  const isFormValid = () => {
    const { personalInformations, education, experience } = formData;

    const isPersonalInfoValid = Object.values(personalInformations).every(
      (value) => value.trim() !== ""
    );
    const isEducationValid = Object.values(education).every(
      (value) => value.trim() !== ""
    );
    const isExperienceValid = Object.values(experience).every(
      (value) => value.trim() !== ""
    );

    return isPersonalInfoValid && isEducationValid && isExperienceValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      //  alert(JSON.stringify(formData, null, 2));
      setIsCV(true);
    } else {
      alert("Please fill in all required fields before submitting.");
    }
  };

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
    <>
      {isCV && (
        <div className={style.overlay}>
          <CV />
        </div>
      )}
      <div className={style.container}>
        <div className={style.navbar}>
          <h1>Create Your CV</h1>
          <Link className={style.link} to="/">
            Homepage
          </Link>
        </div>
        <div className={style.main}>
          <form onSubmit={handleSubmit} className={style.content}>
            <Outlet />
            <div className={style.buttons}>
              <button
                type="button"
                onClick={handlePrevious}
                disabled={pageIndex === 0}
              >
                Previous
              </button>
              <button
                type="button"
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
            <div className={style.btnDiv}>
              <button type="submit" className={style.submitButton}>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
