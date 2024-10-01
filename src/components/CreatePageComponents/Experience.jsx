import style from "./Experience.module.css";

export default function Experience() {
  return (
    <div>
      <div className={style.title}>
        <h1>Experience</h1>
      </div>
      <div className={style.content}>
        <div className={`${style.left} ${style.inputs}`}>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="Position" />
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="Company" />
            <i className="fa-solid fa-building"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="City" />
            <i className="fa-solid fa-city"></i>
          </div>
          <div className={`${style.inputWrapper} ${style.invisible}`}>
            <input type="text" placeholder="Additional Info" />
            <i className="fa-solid fa-info-circle"></i>
          </div>
        </div>

        <div className={`${style.right} ${style.inputs}`}>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="From (dd/mm/yy)" />
            <i className="fa-solid fa-calendar-alt"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="To (dd/mm/yy)" />
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
