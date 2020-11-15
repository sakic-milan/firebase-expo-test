import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

const ButtonUI = (props) => {
  const { handlePress, title } = props;

  return (
    <View>
      <Button title={title} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ButtonUI;
