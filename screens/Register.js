import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { auth } from "../firebase/config";
import ButtonUI from "../components/ButtonUI";
import InputFieldUI from "../components/InputFieldUI";
import useUserProfile from "./../hooks/useUserProfile";

const Register = (props) => {
  const { navigation } = props;
  const { registerWithEmail } = useUserProfile();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccountRequest = async () => {
    try {
      await registerWithEmail(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeEmail = (text) => {
    setEmail(text);
  };

  const handleChangePassword = (text) => {
    setPassword(text);
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  useEffect(() => {
    var currents = firebase.auth().currentUser;
    console.log("current", current);

    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user is:", user);
        var uid = user.uid;
      } else {
      }
    });
  });

  return (
    <View>
      <Text>THIS IS REGISTRATION PAGE</Text>

      <InputFieldUI
        placeholder="email"
        value={email}
        handleInputChange={handleChangeEmail}
      />
      <InputFieldUI
        placeholder="password"
        value={password}
        handleInputChange={handleChangePassword}
      />
      <ButtonUI title="Register" handlePress={handleCreateAccountRequest} />
      <ButtonUI title="Go to Login" handlePress={navigateToLogin} />
    </View>
  );
};

export default Register;
