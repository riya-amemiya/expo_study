import { Picker, type PickerProps } from "@react-native-picker/picker";
import styled from "styled-components/native";

export const PickerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  background-color: #fff;
  gap: 20px;
`;

const pickerStyle = {
  flex: 1,
  height: 40,
  borderWidth: 1,
  borderColor: "#007bff",
  borderRadius: 8,
  elevation: 0,
};

const pickerItemStyle = {
  fontSize: 16,
  textAlign: "center" as const,
};

export const StyledPicker = <T,>(props: PickerProps<T>) => (
  <Picker style={pickerStyle} itemStyle={pickerItemStyle} {...props} />
);
