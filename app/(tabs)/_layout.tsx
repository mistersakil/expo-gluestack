import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const Layout = () => {
  return (
    <View>
      <Tabs initialRouteName="home"></Tabs>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Layout;
