import { observable, action, makeAutoObservable } from "mobx";
import axios from "axios";
import { fetchApi } from "../helper/utils";
import { FIREBASE_WEB_API_KEY } from "../helper/constants";
import { registerWithEmail, loginWithEmail, logOut } from "../firebase/actions";
import { auth } from "../firebase/config";

class UserStore {
  user = null;
  account = null;
  userComments = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  registerWithEmail = async (email, password) => {
    try {
      const response = await registerWithEmail(email, password);
      console.log("REGISTER RESPONSE >>> ", response);
      this.user = response.user.email;
      this.account = user;
      console.log("user", this.user);
    } catch (error) {
      console.log(error);
    }
  };

  getCurrentUser = async () => {
    try {
      await auth.onAuthStateChanged((authUser) => {
        this.user = authUser;
        this.loading = false;
      });
    } catch (error) {}
  };

  setUser = (user) => {
    this.user = user;
  };

  getMyComments = async () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/comments/")
        .then((response) => response.json())
        .then((comments) => (this.userComments = comments.slice(0, 20)));
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
