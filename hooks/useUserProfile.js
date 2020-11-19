import { useContext } from "react";

import { StoreContext } from "../store/AppContext";

const useUserProfile = () => {
  const {
    userStore: { user, registerWithEmail, userLogout },
  } = useContext(StoreContext);

  return {
    user,
    registerWithEmail,
    userLogout,
  };
};

export default useUserProfile;
