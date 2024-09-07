import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfilePage = () => {
  const userList = [
    { id: 1, name: "sakil mahmud" },
    { id: 2, name: "rasel mahmud" },
  ];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile page on tab content</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfilePage;
