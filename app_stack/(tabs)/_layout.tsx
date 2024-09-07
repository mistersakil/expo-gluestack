import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
          tabBarIcon: () => (
            <FontAwesome name="sign-in" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          headerShown: false,
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
