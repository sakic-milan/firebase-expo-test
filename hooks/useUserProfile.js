import { useContext } from "react";
import { StoreContext } from "../store/AppContext";

const useUserProfile = () => {
  const { auth, name } = useContext(StoreContext);

  return { auth, name };
};

export default useUserProfile;
