import style from "./PersonalInformations.module.css";
import { PageContext } from "../../CV-context";
import { useContext } from "react";

export default function PersonalInforamtions() {
  const { formData, handleInputChange } = useContext(PageContext);

  return (
    <div>
      <div className={style.title}>
        <h1>Personal Informations</h1>
      </div>
      <div className={style.content}>
        <div className={`${style.left} ${style.inputs}`}>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="First Name"
              value={formData.personalInformations.firstName}
              onChange={(e) =>
                handleInputChange(
                  "personalInformations",
                  "firstName",
                  e.target.value
                )
              }
            />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="Last Name"
              value={formData.personalInformations.lastName}
              onChange={(e) =>
                handleInputChange(
                  "personalInformations",
                  "lastName",
                  e.target.value
                )
              }
            />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="email"
              placeholder="Email"
              value={formData.personalInformations.email}
              onChange={(e) =>
                handleInputChange(
                  "personalInformations",
                  "email",
                  e.target.value
                )
              }
            />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="tel"
              placeholder="Phone"
              value={formData.personalInformations.phone}
              onChange={(e) =>
                handleInputChange(
                  "personalInformations",
                  "phone",
                  e.target.value
                )
              }
            />
            <i className="fa-solid fa-phone"></i>
          </div>
        </div>

        <div className={`${style.right} ${style.inputs}`}>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="Address"
              value={formData.personalInformations.adress}
              onChange={(e) =>
                handleInputChange(
                  "personalInformations",
                  "adress",
                  e.target.value
                )
              }
            />
            <i className="fa-solid fa-home"></i>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="City"
              value={formData.personalInformations.city}
              onChange={(e) =>
                handleInputChange(
                  "personalInformations",
                  "city",
                  e.target.value
                )
              }
            />
            <i className="fa-solid fa-city"></i>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="Country"
              value={formData.personalInformations.country}
              onChange={(e) =>
                handleInputChange(
                  "personalInformations",
                  "country",
                  e.target.value
                )
              }
            />
            <i className="fa-solid fa-flag"></i>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              placeholder="Postal Code"
              value={formData.personalInformations.postalCode}
              onChange={(e) =>
                handleInputChange(
                  "personalInformations",
                  "postalCode",
                  e.target.value
                )
              }
            />
            <i className="fa-solid fa-envelope"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
