import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import useTheme from "../theme/useTheme";

const { COLORS } = useTheme();
const InputFieldUI = (props) => {
  const { value, placeholder, handleInputChange, ...rest } = props;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        value={value}
        onChangeText={handleInputChange}
        placeholder={placeholder}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  inputField: {
    borderColor: COLORS.primary,
    height: 50,
    paddingHorizontal: 20,
  },
});

export default InputFieldUI;
