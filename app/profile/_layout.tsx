import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
const ProfileLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="dashboard" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="details"
        options={{
          title: "Details",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="notification" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({});

export default ProfileLayout;
