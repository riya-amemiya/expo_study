import { Text, View } from "react-native";

// biome-ignore lint/style/noDefaultExport: <explanation>
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello</Text>
    </View>
  );
}
