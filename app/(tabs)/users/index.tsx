import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Users = () => {
  let userList = [
    { id: 1, name: "sakil mahmud" },
    { id: 2, name: "rasel mahmud" },
  ];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>List of users</Text>
      {userList.map((user) => {
        return (
          <Link
            href={`/users/${user.id}`}
            key={user.id}
            style={{
              margin: 5,
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "black",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
              }}
            >
              {user.name}
            </Text>
          </Link>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Users;
