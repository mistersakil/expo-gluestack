import { Link, Stack } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

const HomePage = () => {
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>Home Page</Text>
        <Link href="/login-page">
          <Text>Login tab page</Text>
        </Link>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default HomePage;
