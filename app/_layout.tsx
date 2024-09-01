import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Box } from "@/components/ui/box";

import { useState } from 'react';
import { Text } from "react-native";

export default function App() {
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");

  return (
    <GluestackUIProvider mode={colorMode}>
      <Box className="bg-white dark:bg-black flex-1">
        <Text style={{ marginTop: 50, fontSize: 50 }}>test</Text>
      </Box>
    </GluestackUIProvider>
  )
}