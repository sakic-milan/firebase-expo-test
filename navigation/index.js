import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { observer } from "mobx-react-lite";

import { View, Text } from "react-native";
import { StoreContext } from "../store/AppContext";
import useUserProfile from "../hooks/useUserProfile";
import { auth } from "../firebase/config";

const index = () => {
  const { user, setUser, getCurrentUser } = useUserProfile();

  let loading = false;

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>App is loading!</Text>
        {/* implement spinner here */}
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default observer(index);
