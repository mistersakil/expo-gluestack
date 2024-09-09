import React from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import MainDrawerComponent from "../components/MainDrawerComponent";
const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <Drawer drawerContent={MainDrawerComponent}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />

        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "About",
            title: "About",
          }}
        />

        <Drawer.Screen
          name="login"
          options={{
            drawerLabel: "Login",
            title: "Login",
          }}
        />

        <Drawer.Screen
          name="register"
          options={{
            drawerLabel: "Register",
            title: "Register",
          }}
        />

        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Profile",
            title: "Dashboard",
            headerShown: false,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
