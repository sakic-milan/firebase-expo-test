import React, { useState } from "react";
import { View, Text } from "react-native";

import ButtonUI from "../components/ButtonUI";
import InputFieldUI from "../components/InputFieldUI";
import useUserProfile from "./../hooks/useUserProfile";

const Register = (props) => {
  const { navigation } = props;
  const { createAccount } = useUserProfile();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccountRequest = async () => {
    await createAccount(email, password);
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
