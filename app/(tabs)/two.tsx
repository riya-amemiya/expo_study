import { Text, View } from "tamagui";

// biome-ignore lint/style/noDefaultExport: <explanation>
export default function TabTwoScreen() {
  return (
    <View flex={1} items="center" justify="center" bg="$background">
      <Text fontSize={20} color="$blue10">
        Tab Two
      </Text>
    </View>
  );
}
