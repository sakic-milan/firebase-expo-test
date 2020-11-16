import React from "react";
import { AppContext } from "./store/AppContext";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return;
  <AppContext>
    <Provider store={store}>
      <AppNavigator />;
    </Provider>
  </AppContext>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
