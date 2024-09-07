import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserDetails = () => {
  let { id } = useLocalSearchParams();
  return (
    <View>
      <Text style={{ fontSize: 30 }}>User details : {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserDetails;
