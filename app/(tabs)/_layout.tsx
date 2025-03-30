import { Atom, AudioWaveform } from "@tamagui/lucide-icons";
import { Link, Tabs } from "expo-router";
import { Button, useTheme } from "tamagui";

// biome-ignore lint/style/noDefaultExport: <explanation>
export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
        },
        headerStyle: {
          backgroundColor: theme.background.val,
          borderBottomColor: theme.borderColor.val,
        },
        headerTintColor: theme.color.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          tabBarIcon: ({ color }) => <Atom color={color as any} />,
          headerRight: () => (
            <Link href="/modal" asChild={true}>
              <Button mr="$4" bg="$green8" color="$green12">
                Hello!
              </Button>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          tabBarIcon: ({ color }) => <AudioWaveform color={color as any} />,
        }}
      />
    </Tabs>
  );
}
