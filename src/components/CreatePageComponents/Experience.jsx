import style from "./Experience.module.css";
import { PageContext } from "../../CV-context";
import { useContext } from "react";

export default function Experience() {
  const { formData, handleInputChange } = useContext(PageContext);

  return (
    <div>
      <div className={style.title}>
        <h1>Experience</h1>
      </div>
      <div className={style.content}>
        <div className={`${style.left} ${style.inputs}`}>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="Position"
              value={formData.experience.position}
              onChange={(e) =>
                handleInputChange("experience", "position", e.target.value)
              }
            />
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="Company"
              value={formData.experience.company}
              onChange={(e) =>
                handleInputChange("experience", "company", e.target.value)
              }
            />
            <i className="fa-solid fa-building"></i>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="City"
              value={formData.experience.city}
              onChange={(e) =>
                handleInputChange("experience", "city", e.target.value)
              }
            />
            <i className="fa-solid fa-city"></i>
          </div>
          <div className={`${style.inputWrapper} ${style.invisible}`}>
            <input type="text" placeholder="Additional Info" />
            <i className="fa-solid fa-info-circle"></i>
          </div>
        </div>

        <div className={`${style.right} ${style.inputs}`}>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="From (dd/mm/yy)"
              value={formData.experience.from}
              onChange={(e) =>
                handleInputChange("experience", "from", e.target.value)
              }
            />
            <i className="fa-solid fa-calendar-alt"></i>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="To (dd/mm/yy)"
              value={formData.experience.to}
              onChange={(e) =>
                handleInputChange("experience", "to", e.target.value)
              }
            />
            <i className="fa-solid fa-calendar-check"></i>
          </div>
          <div className={`${style.inputWrapper} ${style.invisible}`}>
            <input type="text" placeholder="Additional Info" />
            <i className="fa-solid fa-info-circle"></i>
          </div>
          <div className={`${style.inputWrapper} ${style.invisible}`}>
            <input type="text" placeholder="Additional Info" />
            <i className="fa-solid fa-info-circle"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
