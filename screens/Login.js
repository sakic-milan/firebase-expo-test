import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import useUserProfile from "./../hooks/useUserProfile";
import { View, Text } from "react-native";
import ButtonUI from "../components/ButtonUI";
import InputFieldUI from "../components/InputFieldUI";

const Login = (props) => {
  const { navigation } = props;
  const { user, loginWithEmail } = useUserProfile();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginRequest = async () => {
    try {
      await loginWithEmail(email, password);
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

  const navigateToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View>
      <Text>LOGIN PAGE</Text>
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
      <ButtonUI title="LOGIN" handlePress={loginWithEmail} />
      <ButtonUI title="Create new account" handlePress={navigateToRegister} />
    </View>
  );
};

export default observer(Login);
