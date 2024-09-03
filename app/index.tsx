import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";

import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

export default function HomePage() {
  const url = Linking.useURL();

  if (url) {
    const { hostname, path, queryParams } = Linking.parse(url);

    console.warn(
      `host: ${hostname}, path: ${path} data: ${JSON.stringify(queryParams)}`
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button size="sm" variant="solid" action="positive">
        <ButtonText>tailwind btn</ButtonText>
      </Button>
      <Button
        size="sm"
        variant="solid"
        action="primary"
        onPress={() => WebBrowser.openBrowserAsync("https://google.com")}
      >
        <ButtonText>visit google?</ButtonText>
      </Button>

      <Button
        size="sm"
        variant="solid"
        action="negative"
        onPress={() => Linking.openURL("https://facebook.com")}
      >
        <ButtonText>visit facebook?</ButtonText>
      </Button>
    </View>
  );
}
