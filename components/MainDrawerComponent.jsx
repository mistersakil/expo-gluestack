import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const MainDrawerComponent = () => {
  const logoSource = require("@/assets/images/logoipsum-241.png");
  const navigation = useNavigation();

  const menuItems = [
    {
      title: "Home",
      link: "/",
      icon: <Feather name="home" size={20} color="green" />,
    },
    {
      title: "About",
      link: "/about",
      icon: <Feather name="info" size={20} color="green" />,
    },
    {
      title: "Login",
      link: "/login",
      icon: <MaterialIcons name="login" size={20} color="green" />,
    },
    {
      title: "Register",
      link: "/register",
      icon: <FontAwesome name="sign-in" size={20} color="green" />,
    },
    {
      title: "Profile",
      link: "/profile",
      icon: <Feather name="user" size={20} color="green" />,
    },
  ];

  const closeDrawerNavigation = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight || 50 }}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logoSource} />
        </View>
        <View style={styles.navContainer}>
          {menuItems.length > 0 &&
            menuItems.map((item, index) => {
              return (
                <Link key={index} style={styles.navItem} href={item.link} push>
                  {item.icon}
                  <Text style={styles.navItemText}>{item.title}</Text>
                </Link>
              );
            })}
        </View>
      </View>
      <Pressable style={styles.footer} onPress={closeDrawerNavigation}>
        <Text style={styles.footerText}>Close</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 10,
  },
  logoContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  logo: {},
  navContainer: {
    flex: 10,
    padding: 15,
    paddingTop: 40,
    gap: 10,
  },
  navItem: {
    flex: 1,
    maxHeight: "40px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navItemText: {
    fontSize: 24,
    marginLeft: 10,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 24,
  },
});

export default MainDrawerComponent;
