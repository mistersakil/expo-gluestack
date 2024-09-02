import React from "react";
import { View, Text } from "react-native";
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";

import { Appearance, useColorScheme } from "react-native";

export default function HomePage() {
  let colorScheme = useColorScheme();
  let theme = "";
  if (colorScheme === "dark") {
    theme = "dark";
  } else {
    theme = "light";
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Image source="thumbnail-1" /> */}
      <Text>hello glue--</Text>
      <Button size="sm" variant="solid" action="positive">
        <ButtonText>somossa ki?</ButtonText>
      </Button>
      <Text>{theme}</Text>
    </View>
  );
}
