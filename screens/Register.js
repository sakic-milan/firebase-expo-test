import React, { useState } from "react";
import { View, Text } from "react-native";
import ButtonUI from "../components/ButtonUI";
import InputFieldUI from "../components/InputFieldUI";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store";

const Register = (props) => {
  const { navigation } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (text) => {
    setUsername(text);
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
        placeholder="username"
        value={username}
        handleInputChange={handleChangeUsername}
      />
      <InputFieldUI
        placeholder="password"
        value={password}
        handleInputChange={handleChangePassword}
      />
      <ButtonUI
        title="Register"
        handlePress={() => console.log(`${username} ${password}`)}
      />
      <ButtonUI title="Go to Login" handlePress={navigateToLogin} />
    </View>
  );
};

export default Register;
