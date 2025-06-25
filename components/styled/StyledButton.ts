import styled from "styled-components/native";

import { rem } from "@/utils/responsive";

export const StyledButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding-vertical: ${rem(0.75)}px;
  padding-horizontal: ${rem(1.25)}px;
  border-radius: ${rem(0.5)}px;
  align-items: center;
  flex: 1;
`;
