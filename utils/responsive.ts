import { Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const BASE_REM = screenWidth * 0.035;

export const rem = (value: number): number => {
  return BASE_REM * value;
};

export const wp = (percentage: number): number => {
  return (screenWidth * percentage) / 100;
};