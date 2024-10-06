import style from "./CV.module.css";
import { useContext } from "react";
import { PageContext } from "../CV-context";

export default function CV() {
  const { setIsCV, formData } = useContext(PageContext);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <button onClick={() => setIsCV(false)} className={style.CVButton}>
          BACK
        </button>

        <button onClick={handlePrint} className={style.printButton}>
          Print CV
        </button>
      </div>

      <div className={style.a4Container} id="cv">
        <div className={style.header}>
          <div className={style.image}>
            <img src={formData.personalInformations.image} alt="Profile" />
          </div>
          <div className={style.headerText}>
            <h2>
              {formData.personalInformations.firstName}{" "}
              {formData.personalInformations.lastName}
            </h2>
            <p>Email: {formData.personalInformations.email}</p>
            <p>Phone: {formData.personalInformations.phone}</p>
            <p>
              Address: {formData.personalInformations.adress},{" "}
              {formData.personalInformations.city},{" "}
              {formData.personalInformations.country}
            </p>
          </div>
        </div>

        <div className={style.section}>
          <h3>Education</h3>
          <p>
            <strong>University:</strong> {formData.education.universityName}
          </p>
          <p>
            <strong>City:</strong> {formData.education.city}
          </p>
          <p>
            <strong>Degree:</strong> {formData.education.degree} in{" "}
            {formData.education.subject}
          </p>
          <p>
            <strong>Period:</strong> {formData.education.from} -{" "}
            {formData.education.to}
          </p>
        </div>

        <div className={style.section}>
          <h3>Experience</h3>
          <p>
            <strong>Position:</strong> {formData.experience.position}
          </p>
          <p>
            <strong>Company:</strong> {formData.experience.company}
          </p>
          <p>
            <strong>City:</strong> {formData.experience.city}
          </p>
          <p>
            <strong>Period:</strong> {formData.experience.from} -{" "}
            {formData.experience.to}
          </p>
        </div>
      </div>
    </div>
  );
}
