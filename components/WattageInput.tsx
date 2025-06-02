import {
  ManualInput,
  PresetButton,
  PresetButtonsContainer,
  PresetButtonText,
  WattageContainer,
  WattageLabel,
} from "@/components/styled/WattageInputStyles";
import { useState } from "react";

interface WattageInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

const presetWattages = ["500", "600", "700", "800", "1000", "1200", "1500"];

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

  const handleManualInputChange = (text: string) => {
    // 数値のみ許可
    const numericText = text.replace(/[^0-9]/g, "");
    onChangeText(numericText);
  };

  return (
    <WattageContainer>
      <WattageLabel>{label}</WattageLabel>
      <PresetButtonsContainer>
        {presetWattages.map((wattage) => (
          <PresetButton
            key={wattage}
            selected={value === wattage && !isManualInput}
            onPress={() => handlePresetPress(wattage)}
          >
            <PresetButtonText selected={value === wattage && !isManualInput}>
              {wattage}W
            </PresetButtonText>
          </PresetButton>
        ))}
        <PresetButton selected={isManualInput} onPress={handleManualInputPress}>
          <PresetButtonText selected={isManualInput}>手入力</PresetButtonText>
        </PresetButton>
      </PresetButtonsContainer>
      {isManualInput && (
        <ManualInput
          keyboardType="number-pad"
          placeholder="ワット数を入力"
          value={value}
          onChangeText={handleManualInputChange}
          textContentType="none"
          autoComplete="off"
        />
      )}
    </WattageContainer>
  );
}
