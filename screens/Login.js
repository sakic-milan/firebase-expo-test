import React from "react";
import { View, Text } from "react-native";
import ButtonUI from "../components/ButtonUI";
import InputFieldUI from "../components/InputFieldUI";

const Login = (props) => {
  const { navigation } = props;

  const navigateToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View>
      <Text>LOGIN PAGE</Text>
      <InputFieldUI />
      <InputFieldUI />

      <ButtonUI title="Create new account" handlePress={navigateToRegister} />
    </View>
  );
};

export default Login;
