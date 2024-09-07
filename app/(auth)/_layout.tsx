import { Link, Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AuthLayout = () => {
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
          name="login"
          options={{
            title: "Login",
            headerRight: (props) => (
              <Link href="/register" asChild>
                <Text>Register</Text>
              </Link>
            ),
          }}
        />

        <Stack.Screen
          name="register"
          options={{
            title: "Register",
            presentation: "modal",
          }}
        />
      </Stack>
    </>
  );
};

const styles = StyleSheet.create({});

export default AuthLayout;
