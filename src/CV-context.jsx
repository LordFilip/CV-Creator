import { createContext, useState } from "react";

export const PageContext = createContext();

// eslint-disable-next-line react/prop-types
export function PageProvider({ children }) {
  const [isCV, setIsCV] = useState(false);

  const pages = ["personalInformations", "education", "experience"];
  const [pageIndex, setPageIndex] = useState(0);
  const [formData, setFormData] = useState({
    personalInformations: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      adress: "",
      city: "",
      country: "",
      postalCode: "",
    },
    education: {
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
    experience: {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  });

  const handleNext = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  const handleInputChange = (page, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [page]: {
        ...prevData[page],
        [field]: value,
      },
    }));
  };

  return (
    <PageContext.Provider
      value={{
        pageIndex,
        setPageIndex,
        pages,
        formData,
        handleNext,
        handlePrevious,
        handleInputChange,
        isCV,
        setIsCV,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}
