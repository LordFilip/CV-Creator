import { createContext, useState } from "react";

export const PageContext = createContext();

// eslint-disable-next-line react/prop-types
export function PageProvider({ children }) {
  const pages = ["personalInformations", "education", "experience"];
  const [pageIndex, setPageIndex] = useState(0);
  const [formData, setFormData] = useState({
    personalInformations: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
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
      }}
    >
      {children}
    </PageContext.Provider>
  );
}
