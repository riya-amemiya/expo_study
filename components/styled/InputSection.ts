import styled from "styled-components/native";
import { rem } from "@/utils/responsive";

export const InputSection = styled.View`
  margin-bottom: ${rem(1.875)}px;
  background-color: #fff;
  padding: ${rem(1.25)}px;
  border-radius: ${rem(0.625)}px;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  };
  shadow-opacity: 0.1;
  shadow-radius: ${rem(0.1875)}px;
  elevation: 3;
`;