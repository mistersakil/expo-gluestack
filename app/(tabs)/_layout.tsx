import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
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
      <Tabs.Screen name="login-page" options={{ title: "Login Tab Page" }} />

      <Tabs.Screen
        name="register-page"
        options={{ title: "Register Tab Page" }}
      />
      <Tabs.Screen
        name="profile-page"
        options={{ title: "Profile Tab Page", href: null }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({});

export default TabsLayout;
