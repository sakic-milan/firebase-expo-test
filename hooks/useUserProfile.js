import { useContext } from "react";
import { StoreContext } from "../store/AppContext";

const useUserProfile = () => {
  const { auth, name, createAccount } = useContext(StoreContext);

  return { auth, name, createAccount };
};

export default useUserProfile;
