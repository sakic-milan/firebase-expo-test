import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { View, Text } from "react-native";
import { StoreContext } from "../store/AppContext";
import useUserProfile from "../hooks/useUserProfile";
import { auth } from "../firebase/config";

const index = () => {
  const { user, name, userLogout, setUser } = useUserProfile();
  const { isLoading, setIsLoading } = useState(true);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async (authUser) => {
      try {
        await (authUser ? setUser(authUser) : setUser(null));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        // TODO: should hide loading indicator here too but show error massage
      }
    });

    return unsubscribeAuth;
  }, []);

  if (isLoading) {
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

export default index;
