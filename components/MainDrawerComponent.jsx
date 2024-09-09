import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const MainDrawerComponent = () => {
  const logoSource = require("@/assets/images/logoipsum-241.png");

  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight || 50 }}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logoSource} />
        </View>
        <View style={styles.navContainer}>
          <Text>List of menu items</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 10,
    // backgroundColor: "green",
  },
  logoContainer: {
    // backgroundColor: "orange",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  logo: {},
  navContainer: {
    backgroundColor: "red",
    flex: 10,
  },
  footer: {
    flex: 1,
  },
});

export default MainDrawerComponent;
