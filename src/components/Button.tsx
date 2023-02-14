import { View, Pressable, ViewStyle, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import { ColorsOptions, SpacingProps } from "../types";
import Text from "./Text";
import { useTheme } from "../provider/ThemeProvider";

type ButtonProps = SpacingProps &
  React.ComponentProps<typeof Pressable> & {
    title: string;
    color?: ColorsOptions;
    textColor?: ColorsOptions;
    rounded?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "none";
    noBorder?: boolean;
    borderWidth?: number;
    borderColor?: ColorsOptions;
    width?: number | string;
    height?: number | string;
    style?: ViewStyle;
    shadowColor?: ColorsOptions;
    shadowPosition?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
    shadowLength?: number;
    shadowBorderColor?: ColorsOptions;
    shadowStyle?: ViewStyle;
    noShadow?: boolean;
    disableAnimation?: boolean;
  };

const Button = ({
  p = "none",
  px = "none",
  py = "none",
  pt = "none",
  pr = "none",
  pb = "none",
  pl = "none",
  m = "none",
  mx = "none",
  my = "none",
  mt = "none",
  mr = "none",
  mb = "none",
  ml = "none",
  title,
  color = "dark",
  textColor = "neutral",
  shadowColor = "black",
  rounded = "none",
  noBorder = false,
  borderWidth = 1,
  borderColor = "black",
  width = "100%",
  height,
  style,
  shadowPosition = "bottom-right",
  shadowLength = 6,
  shadowBorderColor,
  shadowStyle,
  noShadow = false,
  disableAnimation = false,
  ...props
}: ButtonProps) => {
  const STARTING_VALUE = {
    "bottom-right": {
      x: shadowLength,
      y: shadowLength
    },
    "bottom-left": {
      x: -1 * shadowLength,
      y: shadowLength
    },
    "top-right": {
      x: shadowLength,
      y: -1 * shadowLength
    },
    "top-left": {
      x: -1 * shadowLength,
      y: -1 * shadowLength
    }
  };

  const { spacing, colors } = useTheme();
  const [translation, setTranslation] = useState(
    new Animated.ValueXY(STARTING_VALUE[shadowPosition])
  );

  const roundedMap = {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 10,
    xl: 20,
    full: "100%",
    none: undefined
  };

  const handlePress = (event) => {
    const translateAnimStart = Animated.timing(translation, {
      toValue: { x: 0, y: 0 },
      duration: 200,
      useNativeDriver: true
    });

    const translateAnimFinish = Animated.timing(translation, {
      toValue: STARTING_VALUE[shadowPosition],
      duration: 200,
      useNativeDriver: true
    });

    translateAnimStart.start((result) => {
      if (result.finished) {
        translateAnimFinish.start();
        if (props.onPress) props.onPress(event);
      }
    });
  };

  useEffect(() => {
    setTranslation(new Animated.ValueXY(STARTING_VALUE[shadowPosition]));
  }, [shadowPosition, shadowLength]);

  return (
    <View
      style={{
        position: "relative"
      }}
    >
      <Pressable
        {...props}
        onPress={disableAnimation || noShadow ? props.onPress : handlePress}
      >
        <View
          style={[
            // Spacing Styling
            {
              padding: spacing[p],
              paddingHorizontal: spacing[px],
              paddingVertical: spacing[py],
              paddingTop: spacing[pt],
              paddingRight: spacing[pr],
              paddingBottom: spacing[pb],
              paddingLeft: spacing[pl],
              margin: spacing[m],
              marginHorizontal: spacing[mx],
              marginVertical: spacing[my],
              marginTop: spacing[mt],
              marginRight: spacing[mr],
              marginBottom: spacing[mb],
              marginLeft: spacing[ml]
            },
            {
              width: width,
              height: height,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors[color],
              borderRadius: roundedMap[rounded],
              borderWidth: noBorder ? 0 : borderWidth,
              borderColor: colors[borderColor]
            },
            style
          ]}
        >
          <Text color={textColor} variants="h5">
            {title}
          </Text>
        </View>
      </Pressable>
      {!noShadow && (
        <Animated.View
          style={[
            {
              padding: spacing[p],
              paddingTop: spacing[pt],
              paddingRight: spacing[pr],
              paddingBottom: spacing[pb],
              paddingLeft: spacing[pl],
              paddingHorizontal: spacing[px],
              paddingVertical: spacing[py],
              margin: spacing[m],
              marginHorizontal: spacing[mx],
              marginVertical: spacing[my],
              marginTop: spacing[mt],
              marginRight: spacing[mr],
              marginBottom: spacing[mb],
              marginLeft: spacing[ml]
            },
            {
              transform: [
                { translateX: translation.x },
                { translateY: translation.y }
              ]
            },
            {
              width: width,
              height: height,
              position: "absolute",
              backgroundColor: colors[shadowColor],
              zIndex: -10,
              borderRadius: roundedMap[rounded],
              borderWidth: borderWidth,
              borderColor: shadowBorderColor
                ? colors[shadowBorderColor]
                : colors[shadowColor],
              top: 0,
              bottom: 0
            },
            { ...shadowStyle }
          ]}
        />
      )}
    </View>
  );
};

export default Button;
