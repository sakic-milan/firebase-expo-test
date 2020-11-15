import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import useTheme from "../theme/useTheme";

const { COLORS } = useTheme();
const InputFieldUI = (props) => {
  const { value, placeholder, handleInputChange } = props;

  const inputHandler = (text) => {
    handleInputChange(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        value={value}
        onChangeText={inputHandler}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 15,
    marginVertical: 20,
    height: 70,
    backgroundColor: "red",
  },
  inputField: {
    borderBottomColor: COLORS.primary,
  },
});

export default InputFieldUI;
