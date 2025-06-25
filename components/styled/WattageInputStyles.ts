import { TextInput } from "react-native";
import styled from "styled-components/native";

import { rem } from "@/utils/responsive";

export const WattageContainer = styled.View`
  margin-bottom: ${rem(0.9375)}px;
`;

export const WattageLabel = styled.Text`
  font-size: ${rem(1)}px;
  font-weight: bold;
  margin-bottom: ${rem(0.3125)}px;
`;

export const PresetButtonsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${rem(0.625)}px;
  margin-bottom: ${rem(0.625)}px;
`;

export const PresetButton = styled.TouchableOpacity<{ selected: boolean }>`
  padding-vertical: ${rem(0.5)}px;
  padding-horizontal: ${rem(0.75)}px;
  width: ${rem(5)}px;
  border-radius: ${rem(0.3125)}px;
  border-width: 1px;
  border-color: ${(props) => (props.selected ? "#007bff" : "#ccc")};
  background-color: ${(props) => (props.selected ? "#007bff" : "transparent")};
  align-items: center;
`;

export const PresetButtonText = styled.Text<{ selected: boolean }>`
  font-size: ${rem(0.875)}px;
  color: ${(props) => (props.selected ? "#fff" : "#333")};
`;

export const ManualInput = styled(TextInput)`
  height: ${rem(2.5)}px;
  border-color: #ccc;
  border-width: 1px;
  padding-horizontal: ${rem(0.625)}px;
  border-radius: ${rem(0.3125)}px;
`;
