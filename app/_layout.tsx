import "../global.css";

import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import React from "react";

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack>
        <Stack.Screen name="(blog)" />
        {/* <Stack.Screen name="pages" /> */}
        {/* <Stack.Screen name="index" /> */}
      </Stack>
    </GluestackUIProvider>
  );
}
