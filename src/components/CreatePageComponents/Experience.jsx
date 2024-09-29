import style from "./Experience.module.css";

export default function Education() {
  return (
    <div>
      <div className={style.title}>
        <h1>Education</h1>
      </div>
      <div className={style.content}>
        <div className={`${style.left} ${style.inputs}`}>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="Position" />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="Company" />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="email" placeholder="City" />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className={`${style.inputWrapper} ${style.invisible}`}>
            <input type="text" placeholder="To (dd/mm/yy)" />
            <i className="fa-solid fa-flag"></i>
          </div>
        </div>

        <div className={`${style.right} ${style.inputs}`}>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="From (dd/mm/yy)" />
            <i className="fa-solid fa-city"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="To (dd/mm/yy)" />
            <i className="fa-solid fa-flag"></i>
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
