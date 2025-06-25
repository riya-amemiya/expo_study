import { SizableText, Slider, XStack, YStack, type XStackProps } from "tamagui";

import { rem } from "@/utils/responsive";

export const StyledSelectContainer = ({ children, ...props }: XStackProps) => (
  <XStack gap={rem(1.25)} mb={rem(1)} bg="$background" {...props}>
    {children}
  </XStack>
);

interface StyledSliderProps {
  value: string;
  onValueChange: (value: string) => void;
  items: { label: string; value: string }[];
}

export function StyledSlider({
  value,
  onValueChange,
  items,
}: StyledSliderProps) {
  const currentIndex = items.findIndex((item) => item.value === value);

  return (
    <YStack flex={1} gap="$2">
      <SizableText size="$4">
        {items[currentIndex]?.label || items[0]?.label}
      </SizableText>
      <Slider
        value={[currentIndex]}
        min={0}
        max={items.length - 1}
        step={1}
        onValueChange={(values) => {
          onValueChange(items[values[0]].value);
        }}
      >
        <Slider.Track bg="$borderColor" height="$1">
          <Slider.TrackActive bg="#007bff" />
        </Slider.Track>
        <Slider.Thumb
          size="$2"
          index={0}
          circular={true}
          bg="#007bff"
          borderColor="#007bff"
        />
      </Slider>
    </YStack>
  );
}
