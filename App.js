import React from "react";
import { AppContext } from "./store/AppContext";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <AppContext>
      <AppNavigator />
    </AppContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
