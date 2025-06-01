import styled from "styled-components/native";
import { rem } from "@/utils/responsive";

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  gap: ${rem(1)}px;
  margin-bottom: ${rem(1.875)}px;
`;