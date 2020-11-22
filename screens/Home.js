import React, { useState, useEffect, useContext, useCallback } from "react";
import { observer } from "mobx-react-lite";
import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  ScrollView,
} from "react-native";
import useUserProfile from "../hooks/useUserProfile";
import ButtonUI from "../components/ButtonUI";
import Comment from "../components/Comment";
import { getCurrentUser } from "../firebase/actions";

const Home = (props) => {
  const { navigation } = props;
  const {
    user,
    account,
    userComments,
    getMyComments,
    userLogout,
  } = useUserProfile();
  //dummy refresh
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState("initial");

  console.log("account", account);

  const onRefresh = () => {
    setRefreshing(true);
    console.log("refresh");
    setData("changed");
    setTimeout(() => {
      setRefreshing(false);
      console.log("end");
    }, 3000);
  };

  const handleLogout = async () => {
    try {
      const response = await userLogout();
    } catch (error) {
      console.log(error);
    }
  };

  if (refreshing) {
    return (
      <View style={styles.homeContainer}>
        <Text>Refreshing...</Text>
      </View>
    );
  }

  return (
    <View style={styles.homeContainer}>
      <RefreshControl
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>Welcome {data}</Text>
        <ButtonUI title="Logout" handlePress={handleLogout} />
        <ButtonUI
          title="Go to My Profile page"
          handlePress={() => navigation.navigate("MyProfile")}
        />
        <ButtonUI title="Refresh" handlePress={onRefresh} />
        <ScrollView>
          {userComments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </ScrollView>
      </RefreshControl>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    marginTop: 30,
  },
});

export default observer(Home);
