import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
const MasterLayout = () => {
  return (
    <>
      <Stack
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
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerRight: (props) => (
              <Link href="/login" asChild>
                <Text>Login</Text>
              </Link>
            ),
          }}
        />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

const styles = StyleSheet.create({});

export default MasterLayout;
