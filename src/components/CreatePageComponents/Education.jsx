import style from "./Education.module.css";
import { PageContext } from "../../CV-context";
import { useContext } from "react";

export default function Education() {
  const { formData, handleInputChange } = useContext(PageContext);
  return (
    <div>
      <div className={style.title}>
        <h1>Education</h1>
      </div>
      <div className={style.content}>
        <div className={`${style.left} ${style.inputs}`}>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="University name"
              value={formData.education.universityName}
              onChange={(e) =>
                handleInputChange("education", "universityName", e.target.value)
              }
            />
            <i className="fa-solid fa-school"></i>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="City"
              value={formData.education.city}
              onChange={(e) =>
                handleInputChange("education", "city", e.target.value)
              }
            />
            <i className="fa-solid fa-city"></i>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="Degree"
              value={formData.education.degree}
              onChange={(e) =>
                handleInputChange("education", "degree", e.target.value)
              }
            />
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="Subject"
              value={formData.education.subject}
              onChange={(e) =>
                handleInputChange("education", "subject", e.target.value)
              }
            />
            <i className="fa-solid fa-book-open"></i>
          </div>
        </div>

        <div className={`${style.right} ${style.inputs}`}>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="From (dd/mm/yy)"
              value={formData.education.from}
              onChange={(e) =>
                handleInputChange("education", "from", e.target.value)
              }
            />
            <i className="fa-solid fa-calendar-alt"></i>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="To (dd/mm/yy)"
              value={formData.education.to}
              onChange={(e) =>
                handleInputChange("education", "to", e.target.value)
              }
            />
            <i className="fa-solid fa-calendar-check"></i>
          </div>
          <div className={`${style.inputWrapper} ${style.invisible}`}>
            <input type="text" placeholder="To (dd/mm/yy)" />
            <i className="fa-solid fa-flag"></i>
          </div>
          <div className={`${style.inputWrapper} ${style.invisible}`}>
            <input type="text" placeholder="To (dd/mm/yy)" />
            <i className="fa-solid fa-flag"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
