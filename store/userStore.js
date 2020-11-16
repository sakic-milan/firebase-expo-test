import { observable, action, makeAutoObservable } from "mobx";

class UserStore {
  auth = false;
  name = "John";
  constructor() {
    makeAutoObservable(this);
  }
}

export default UserStore;
