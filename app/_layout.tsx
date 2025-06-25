import { Stack } from "expo-router";
import { TamaguiProvider } from "tamagui";

import { config } from "@/tamagui.config";

// biome-ignore lint/style/noDefaultExport: ignore
export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </TamaguiProvider>
  );
}
