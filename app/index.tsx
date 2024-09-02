// import "../global.css";

import React from "react";
import { View, Text } from "react-native";
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";
import { Box } from "@/components/ui/box";

export default function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>hello glue</Text>
      <Button size="sm" variant="solid" action="positive">
        <ButtonText>somossa ki?</ButtonText>
      </Button>
    </View>
  );
}
