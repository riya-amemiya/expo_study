import { rem } from "@/utils/responsive";
import { Picker } from "@react-native-picker/picker";
import { Platform } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import styled from "styled-components/native";

export const PickerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${rem(1)}px;
  background-color: #fff;
  gap: ${rem(1.25)}px;
`;

const pickerSelectStyles = {
  inputIOS: {
    fontSize: rem(1),
    paddingVertical: rem(0.75),
    paddingHorizontal: rem(0.75),
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: rem(0.5),
    color: "black",
    backgroundColor: "#fff",
    flex: 1,
    textAlign: "center" as const,
  },
  inputAndroid: {
    fontSize: rem(1),
    paddingHorizontal: rem(0.75),
    paddingVertical: rem(0.5),
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: rem(0.5),
    color: "black",
    backgroundColor: "#fff",
    flex: 1,
    textAlign: "center" as const,
  },
  viewContainer: {
    flex: 1,
  },
};

const webPickerStyle = {
  flex: 1,
  height: rem(2.5),
  borderWidth: 1,
  borderColor: "#007bff",
  borderRadius: rem(0.5),
  fontSize: rem(1),
  textAlign: "center" as const,
  backgroundColor: "#fff",
  color: "black",
};

interface StyledPickerProps {
  value: string;
  onValueChange: (value: string) => void;
  items: { label: string; value: string }[];
}

export function StyledPicker(props: StyledPickerProps) {
  if (Platform.OS === "web") {
    return (
      <Picker
        selectedValue={props.value}
        onValueChange={props.onValueChange}
        style={webPickerStyle}
      >
        {props.items.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    );
  }

  return (
    <RNPickerSelect
      value={props.value}
      onValueChange={props.onValueChange}
      items={props.items}
      style={pickerSelectStyles}
      useNativeAndroidPickerStyle={false}
    />
  );
}
