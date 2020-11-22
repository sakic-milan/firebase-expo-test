import React from "react";
import { View, StyleSheet } from "react-native";
import COLORS from "../theme/colors";

const AuthCard = (props) => {
  const { children } = props;
  return <View style={styles.cardContainer}>{props.children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 30,
    borderColor: COLORS.primary_light,
    borderWidth: 2,
    marginHorizontal: 18,
    marginTop: 20,

    borderRadius: 12,
  },
});

export default AuthCard;
