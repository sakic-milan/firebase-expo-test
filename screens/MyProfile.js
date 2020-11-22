import React, { useEffect } from "react";
import { View, Text } from "react-native";
import ButtonUI from "../components/ButtonUI";

const MyProfile = (props) => {
  const { navigation } = props;

  return (
    <View>
      <Text>My Profile XD</Text>

      <ButtonUI
        title="Go to Home page"
        handlePress={() => navigation.navigate("Home")}
      />
      <ButtonUI
        title="Go to Drawer page"
        handlePress={() => navigation.navigate("Drawer")}
      />
    </View>
  );
};

export default MyProfile;
