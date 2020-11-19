import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import useUserProfile from "./../hooks/useUserProfile";
import { View, Text } from "react-native";
import ButtonUI from "../components/ButtonUI";
import InputFieldUI from "../components/InputFieldUI";
import { loginWithEmail } from "../firebase/actions";

const Login = (props) => {
  const { navigation } = props;
  const { user } = useUserProfile();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (text) => {
    setEmail(text);
  };

  const handleChangePassword = (text) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    try {
      const response = await loginWithEmail(email, password);
    } catch (error) {
      console.log(error);
    }
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
      <ButtonUI title="LOGIN" handlePress={handleLogin} />
      <ButtonUI title="Create new account" handlePress={navigateToRegister} />
    </View>
  );
};

export default observer(Login);
