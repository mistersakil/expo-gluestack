import React from "react";
import { StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
const MasterLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />

        <Stack.Screen
          name="register/index"
          options={{
            title: "Register",
          }}
        />

        <Stack.Screen
          name="[missing]"
          options={{
            title: "404",
          }}
        />
      </Stack>
    </>
  );
};

const styles = StyleSheet.create({});

export default MasterLayout;
