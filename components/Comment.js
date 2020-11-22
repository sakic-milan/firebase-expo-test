import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../theme/colors";

const Comment = (props) => {
  const {
    comment: { name, body },
  } = props;
  return (
    <View style={styles.commentWrapper}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentWrapper: {
    marginVertical: 8,
    marginHorizontal: 15,
    borderColor: COLORS.secondary,
    borderWidth: 2,
    borderRadius: 10,
  },
  name: {
    padding: 10,
    fontWeight: "700",
  },
  body: {
    padding: 10,
  },
});

export default Comment;
