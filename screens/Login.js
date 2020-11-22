import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import useUserProfile from "./../hooks/useUserProfile";
import { View, Text } from "react-native";
import ButtonUI from "../components/ButtonUI";
import InputFieldUI from "../components/InputFieldUI";
import AuthCard from "../components/AuthCard";

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
      <AuthCard>
        <InputFieldUI
          placeholder="email"
          value={email}
          handleInputChange={handleChangeEmail}
          keyboardType="email-address"
        />
        <InputFieldUI
          placeholder="password"
          value={password}
          handleInputChange={handleChangePassword}
          secureTextEntry
        />
        <ButtonUI title="LOGIN" handlePress={handleLoginRequest} />
        <ButtonUI title="Create new account" handlePress={navigateToRegister} />
      </AuthCard>
    </View>
  );
};

export default observer(Login);
