import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ProfileDashboard = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Profile dashboard</Text>

      <Link
        href={{
          pathname: "/profile/details",
          params: { name: "sakil mahmud" },
        }}
        push
        style={{ fontSize: 24 }}
      >
        Go to details
      </Link>

      <Link style={{ fontSize: 24 }} href={"/"}>
        Goto home
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileDashboard;
