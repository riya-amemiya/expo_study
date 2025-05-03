import { useState } from "react";
import { Button, Text, View } from "react-native";
import { random } from "umt";

// biome-ignore lint/style/noDefaultExport: <explanation>
export default function Index() {
  const [randomNumber, setRandomNumber] = useState(random(100));
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello {randomNumber}</Text>
      <Button
        title="Generate Random Number"
        onPress={() => {
          setRandomNumber(random(100));
        }}
      />
    </View>
  );
}
