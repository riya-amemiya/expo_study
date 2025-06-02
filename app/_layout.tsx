import { defaultConfig } from "@tamagui/config/v4";
import { Stack } from "expo-router";
import { createTamagui, TamaguiProvider } from "tamagui";

const config = createTamagui(defaultConfig);

// biome-ignore lint/style/noDefaultExport: <explanation>
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
