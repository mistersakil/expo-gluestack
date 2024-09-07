import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

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
      <Tabs.Screen
        name="login-page"
        options={{
          title: "Login",
          headerTitle: "Login please",
          tabBarIcon: () => <AntDesign name="login" size={24} color="black" />,
        }}
      />

      <Tabs.Screen
        name="register-page"
        options={{
          headerTitle: "Create new user",
          title: "Register",
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="profile-page"
        options={{
          title: "Users",
          headerTitle: "List of users",
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({});

export default TabsLayout;
