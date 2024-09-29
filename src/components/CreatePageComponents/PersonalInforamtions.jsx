import style from "./PersonalInformations.module.css";

export default function PersonalInforamtions() {
  return (
    <div>
      <div className={style.title}>
        <h1>Personal Informations</h1>
      </div>
      <div className={style.content}>
        <div className={`${style.left} ${style.inputs}`}>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="First Name" />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="Last Name" />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="email" placeholder="Email" />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="tel" placeholder="Phone" />
            <i className="fa-solid fa-phone"></i>
          </div>
        </div>

        <div className={`${style.right} ${style.inputs}`}>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="Address" />
            <i className="fa-solid fa-home"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="City" />
            <i className="fa-solid fa-city"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="Country" />
            <i className="fa-solid fa-flag"></i>
          </div>
          <div className={style.inputWrapper}>
            <input type="text" placeholder="Postal Code" />
            <i className="fa-solid fa-mailbox"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
