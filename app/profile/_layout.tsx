import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
const ProfileLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "index") {
            iconName = focused ? "dashboard" : "space-dashboard";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === "details") {
            iconName = focused ? "user-check" : "user";
            return <Feather name={iconName} size={size} color={color} />;
          } else if (route.name === "notifications") {
            iconName = focused ? "notifications-active" : "notifications";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "cyan",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
        }}
      />

      <Tabs.Screen
        name="details"
        options={{
          title: "Details",
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({});

export default ProfileLayout;
