import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface WattageInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

const presetWattages = ["500", "600", "700", "800", "1000"];

export function WattageInput({
  label,
  value,
  onChangeText,
}: WattageInputProps) {
  const [isManualInput, setIsManualInput] = useState(
    !presetWattages.includes(value),
  );

  const handlePresetPress = (wattage: string) => {
    onChangeText(wattage);
    setIsManualInput(false);
  };

  const handleManualInputPress = () => {
    setIsManualInput(true);
    onChangeText("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.presetButtonsContainer}>
        {presetWattages.map((wattage) => (
          <TouchableOpacity
            key={wattage}
            style={[
              styles.presetButton,
              value === wattage &&
                !isManualInput &&
                styles.presetButtonSelected,
            ]}
            onPress={() => handlePresetPress(wattage)}
          >
            <Text
              style={[
                styles.presetButtonText,
                value === wattage &&
                  !isManualInput &&
                  styles.presetButtonTextSelected,
              ]}
            >
              {wattage}W
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[
            styles.presetButton,
            isManualInput && styles.presetButtonSelected,
          ]}
          onPress={handleManualInputPress}
        >
          <Text
            style={[
              styles.presetButtonText,
              isManualInput && styles.presetButtonTextSelected,
            ]}
          >
            手入力
          </Text>
        </TouchableOpacity>
      </View>
      {isManualInput && (
        <TextInput
          style={styles.manualInput}
          keyboardType="numeric"
          placeholder="ワット数を入力"
          value={value}
          onChangeText={onChangeText}
          textContentType="none"
          autoComplete="off"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  presetButtonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 10,
  },
  presetButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: 80,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  presetButtonSelected: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  presetButtonText: {
    fontSize: 14,
    color: "#333",
  },
  presetButtonTextSelected: {
    color: "#fff",
  },
  manualInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
