import style from "./Education.module.css";

export default function Education() {
  return (
    <div>
      <div className={style.title}>
        <h1>Education</h1>
      </div>
      <div className={style.content}>
        <div className={`${style.left} ${style.inputs}`}>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="University name" />
            <i className="fa-solid fa-school"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="City" />
            <i className="fa-solid fa-city"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="Degree" />
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="Subject" />
            <i className="fa-solid fa-book-open"></i>
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
