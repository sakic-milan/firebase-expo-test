import { useContext } from "react";

import { StoreContext } from "../store/AppContext";

const useUserProfile = () => {
  const {
    userStore: { user, registerWithEmail, loginWithEmail, userLogout },
  } = useContext(StoreContext);

  return {
    user,
    registerWithEmail,
    loginWithEmail,
    userLogout,
  };
};

export default useUserProfile;
