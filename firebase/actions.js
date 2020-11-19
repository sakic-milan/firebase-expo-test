import { firebase, auth } from "./config";

export const registerWithEmail = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const loginWithEmail = (email, password) => {
  return auth.signInWithEmailAndPassword(email.password);
};

export const passwordReset = (email) => {
  return auth.sendPasswordResetEmail(email);
};

export const logOut = async () => {
  try {
    const response = await auth.signOut();
    console.log("LOG OUT RESPONSE: ", response);
  } catch (error) {
    console.log(error);
  }
};
