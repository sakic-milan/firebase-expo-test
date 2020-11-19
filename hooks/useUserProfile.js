import { useContext } from "react";

import { StoreContext } from "../store/AppContext";

const useUserProfile = () => {
  const {
    userStore: { user, auth, name, registerWithEmail, userLogout, setUser },
  } = useContext(StoreContext);

  return { user, auth, name, registerWithEmail, userLogout, setUser };
};

export default useUserProfile;
