import React from "react";
import { StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
const MasterLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default MasterLayout;
