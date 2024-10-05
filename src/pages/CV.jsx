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
            <img src={formData.personalInformations.image} alt="" />
          </div>
          <div className={style.headerText}>
            <h3>{formData.personalInformations.firstName}</h3>
            <h3>{formData.personalInformations.lastName}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
