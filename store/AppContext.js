import React, { createContext } from "react";
import UserStore from "./UserStore";

export const StoreContext = createContext();

export const AppContext = (props) => {
  const userStore = new UserStore();

  return (
    <StoreContext.Provider value={{ userStore }}>
      {props.children}
    </StoreContext.Provider>
  );
};
