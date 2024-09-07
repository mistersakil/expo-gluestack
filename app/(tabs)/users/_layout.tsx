import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "List of users",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "User Details",
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default Layout;
