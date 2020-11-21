import React, { useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import StoreContext from "../store/AppContext";
import { View, Text } from "react-native";
import useUserProfile from "../hooks/useUserProfile";
import ButtonUI from "../components/ButtonUI";
import { logOut } from "../firebase/actions";
import { auth } from "../firebase/config";

const Home = () => {
  const { user, userLogout } = useUserProfile();

  const handleLogout = async () => {
    try {
      const response = await userLogout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Welcome</Text>
      <ButtonUI title="Logout" handlePress={handleLogout} />
    </View>
  );
};

export default observer(Home);
