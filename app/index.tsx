import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { addition, division, multiplication } from "umt";

import { WattageInput } from "@/components/WattageInput";
import { ButtonContainer } from "@/components/styled/ButtonContainer";
import { ButtonText } from "@/components/styled/ButtonText";
import { Container } from "@/components/styled/Container";
import { InputSection } from "@/components/styled/InputSection";
import { ResultSection } from "@/components/styled/ResultSection";
import { ResultText } from "@/components/styled/ResultText";
import { SectionTitle } from "@/components/styled/SectionTitle";
import { StyledButton } from "@/components/styled/StyledButton";
import {
  StyledSelectContainer,
  StyledSlider,
} from "@/components/styled/StyledSlider";
import { Title } from "@/components/styled/Title";

// biome-ignore lint/style/noDefaultExport: ignore
export default function MicrowaveTimerConverter() {
  const [baseWattage, setBaseWattage] = useState("600");
  const [baseMinutes, setBaseMinutes] = useState("3");
  const [baseSeconds, setBaseSeconds] = useState("0");
  const [results, setResults] = useState<{ wattage: number; time: string }[]>(
    [],
  );

  const minuteItems = Array.from({ length: 11 }, (_, i) => ({
    label: `${i} 分`,
    value: i.toString(),
  }));

  const secondItems = Array.from({ length: 60 }, (_, i) => ({
    label: `${i} 秒`,
    value: i.toString(),
  }));

  const calculateTimes = () => {
    const baseW = Number.parseInt(baseWattage, 10);
    const baseM = Number.parseInt(baseMinutes, 10) || 0;
    const baseS = Number.parseInt(baseSeconds, 10) || 0;

    if (
      Number.isNaN(baseW) ||
      baseW <= 0 ||
      baseM < 0 ||
      baseS < 0 ||
      baseS >= 60
    ) {
      Alert.alert("入力エラー", "有効なワット数と時間を入力してください。");
      setResults([]);
      return;
    }

    const baseTotalSeconds = addition(multiplication(baseM, 60), baseS);
    if (baseTotalSeconds <= 0) {
      Alert.alert("入力エラー", "基準時間は0より大きくしてください。");
      setResults([]);
      return;
    }

    const wattagesToCalculate = Array.from({ length: 11 }, (_, i) =>
      addition(500, multiplication(i, 100)),
    );
    const calculatedResults = wattagesToCalculate.map((targetW) => {
      const targetTotalSeconds = division(
        multiplication(baseW, baseTotalSeconds),
        targetW,
      );
      const minutes = Math.floor(division(targetTotalSeconds, 60));
      const seconds = Math.round(division(targetTotalSeconds, 60, false)[1]);
      return { wattage: targetW, time: `${minutes}分${seconds}秒` };
    });

    setResults(calculatedResults);
  };

  const clearInputs = () => {
    setBaseWattage("600");
    setBaseMinutes("3");
    setBaseSeconds("0");
    setResults([]);
  };

  return (
    <Container as={ScrollView}>
      <Title>電子レンジ時間計算</Title>

      <InputSection>
        <SectionTitle>基準ワット数と時間</SectionTitle>
        <WattageInput
          label="基準ワット数"
          value={baseWattage}
          onChangeText={setBaseWattage}
        />
        <StyledSelectContainer>
          <StyledSlider
            value={baseMinutes}
            onValueChange={setBaseMinutes}
            items={minuteItems}
          />
          <StyledSlider
            value={baseSeconds}
            onValueChange={setBaseSeconds}
            items={secondItems}
          />
        </StyledSelectContainer>
        <ButtonContainer>
          <StyledButton onPress={calculateTimes}>
            <ButtonText>計算</ButtonText>
          </StyledButton>
          <StyledButton onPress={clearInputs}>
            <ButtonText>入力クリア</ButtonText>
          </StyledButton>
        </ButtonContainer>
      </InputSection>

      {results.length > 0 && (
        <ResultSection>
          <SectionTitle>計算結果</SectionTitle>
          {results.map((result) => (
            <ResultText key={result.wattage}>
              {result.wattage}W: {result.time}
            </ResultText>
          ))}
        </ResultSection>
      )}
    </Container>
  );
}
