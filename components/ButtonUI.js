import React from "react";
import useTheme from "../theme/useTheme";

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

const { COLORS } = useTheme();

const ButtonUI = (props) => {
  const { handlePress, title } = props;

  return (
    <View style={styles.buttonWrapper}>
      <Button title={title} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
});

export default ButtonUI;
