import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openSideBar = () => {
    setShowSideBar(true);
  };
  const closeSideBar = () => {
    setShowSideBar(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSideBar,
        closeSideBar,
        openModal,
        closeModal,
        showSideBar,
        showModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
