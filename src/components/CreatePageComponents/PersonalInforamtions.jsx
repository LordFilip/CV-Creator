import style from "./PersonalInformations.module.css";

export default function PersonalInforamtions() {
  return (
    <div>
      <div className={style.title}>
        <h1>Personal Informations</h1>
      </div>
      <div className={style.content}>
        <div className={`${style.left} ${style.inputs}`}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
        </div>
        <div className={`${style.right} ${style.inputs}`}>
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="Postal Code" />
        </div>
      </div>
    </div>
  );
}
