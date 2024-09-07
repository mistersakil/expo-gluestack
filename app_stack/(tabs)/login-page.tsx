import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const LoginPage = () => {
  return (
    <View>
      <Text>Login page on tab content</Text>
      <Button title="GoBack" onPress={() => router.back()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginPage;
