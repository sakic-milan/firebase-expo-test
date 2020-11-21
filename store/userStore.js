import { observable, action, makeAutoObservable } from "mobx";
import axios from "axios";
import { fetchApi } from "../helper/utils";
import { FIREBASE_WEB_API_KEY } from "../helper/constants";
import { registerWithEmail, loginWithEmail, logOut } from "../firebase/actions";
import { auth } from "../firebase/config";

class UserStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  registerWithEmail = async (email, password) => {
    try {
      const response = await registerWithEmail(email, password);
      console.log("REGISTER RESPONSE >>> ", response);
      this.user = response.user.email;
      console.log("user", this.user);
    } catch (error) {
      console.log(error);
    }
  };

  loginWithEmail = async (email, password) => {
    try {
      const response = await loginWithEmail(email, password);
      console.log("LOGIN RESPONSE >>> ", response);
      this.user = response.user.email;
    } catch (error) {
      console.log(error);
    }
  };

  userLogout = async () => {
    try {
      const response = await logOut();
      console.log("logout response > ", response);
      this.user = null;
    } catch (error) {
      console.log(error);
    }
  };
}

export default UserStore;
