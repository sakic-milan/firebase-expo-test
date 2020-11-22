import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import MyProfile from "../screens/MyProfile";

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="MyProfile" component={MyProfile} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
