import { observable, action, makeAutoObservable } from "mobx";
import axios from "axios";

import { fetchApi } from "../helper/utils";
import { FIREBASE_WEB_API_KEY } from "../helper/constants";

class UserStore {
  auth = false;
  name = "";
  constructor() {
    makeAutoObservable(this);
  }

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
