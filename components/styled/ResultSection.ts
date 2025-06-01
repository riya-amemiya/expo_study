import { View } from "react-native";
import styled from "styled-components/native";
import { rem } from "@/utils/responsive";

export const ResultSection = styled(View)`
  margin-top: ${rem(1.5)}px;
  padding: ${rem(1)}px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: ${rem(0.5)}px;
  width: 100%;
`;