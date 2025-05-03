import { Stack } from "expo-router";

// biome-ignore lint/style/noDefaultExport: <explanation>
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
