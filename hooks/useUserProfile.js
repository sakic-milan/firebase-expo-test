import { useContext } from "react";

import { StoreContext } from "../store/AppContext";

const useUserProfile = () => {
  const {
    userStore: {
      user,
      loading,
      getCurrentUser,
      setUser,
      account,
      userComments,
      getMyComments,
      registerWithEmail,
      loginWithEmail,
      userLogout,
    },
  } = useContext(StoreContext);

  return {
    user,
    loading,
    getCurrentUser,
    setUser,
    account,
    userComments,
    getMyComments,
    registerWithEmail,
    loginWithEmail,
    userLogout,
  };
};

export default useUserProfile;
