import { observable, action, makeAutoObservable } from "mobx";
import axios from "axios";
import { fetchApi } from "../helper/utils";
import { FIREBASE_WEB_API_KEY } from "../helper/constants";
import { registerWithEmail, logOut } from "../firebase/actions";

class UserStore {
  userId = null;
  user = null;
  auth = true;
  name = "Peters";
  email = "";
  constructor() {
    makeAutoObservable(this);
  }

  registerWithEmail = async (email, password) => {
    try {
      const response = await registerWithEmail(email, password);
      setUser(response);
      console.log("response", response);
    } catch (error) {
      this.auth = false;
      console.log(error);
    }
  };

  setUser(user) {
    this.user = user;
  }

  userLogout = async () => {
    try {
      const response = await logOut();
      this.auth = false;
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  createAccount = async (email, password) => {
    const response = await axios({
      method: "post",
      url:
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2cGp1PZfR5bDYCHqEtEziA_daXEJLpqg",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: email,
        password: password,
        returnSecureToken: true,
      },
    });

    // const config = {
    //   method: "POST",
    //   contentType: "application/json",
    //   url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_WEB_API_KEY}`,
    // };
    // const data = {
    //   email: email,
    //   password: password,
    //   returnSecureToken: true,
    // };
    // await fetchApi(config, data);
  };
}

export default UserStore;
