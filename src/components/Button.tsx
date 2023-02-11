import {
  View,
  TouchableNativeFeedback,
  ViewStyle,
  Animated
} from "react-native";
import React, { useEffect, useState } from "react";
import { ColorsOptions, SpacingProps } from "../types";
import Text from "./Text";
import { useTheme } from "../provider/ThemeProvider";

type ButtonProps = SpacingProps &
  React.ComponentProps<typeof View> & {
    title: string;
    color?: ColorsOptions;
    textColor?: ColorsOptions;
    rounded?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "none";
    shadowColor?: ColorsOptions;
    shadowPosition?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
    shadowStyle?: ViewStyle;
  };

const STARTING_VALUE = {
  "bottom-right": {
    x: 6,
    y: 6
  },
  "bottom-left": {
    x: -6,
    y: 6
  },
  "top-right": {
    x: 6,
    y: -6
  },
  "top-left": {
    x: -6,
    y: -6
  }
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
  shadowPosition = "bottom-right",
  shadowStyle,
  ...props
}: ButtonProps) => {
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

  const onPress = () => {
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
      if (result.finished) translateAnimFinish.start();
    });
  };

  useEffect(() => {
    setTranslation(new Animated.ValueXY(STARTING_VALUE[shadowPosition]));
  }, [shadowPosition]);

  return (
    <View style={{ position: "relative" }}>
      <TouchableNativeFeedback onPress={onPress}>
        <View
          {...props}
          style={[
            props.style,
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
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors[color],
              borderRadius: roundedMap[rounded]
            }
          ]}
        >
          <Text color={textColor} variants="h5">
            {title}
          </Text>
        </View>
      </TouchableNativeFeedback>
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
            position: "absolute",
            backgroundColor: colors[shadowColor],
            width: "100%",
            zIndex: -10,
            borderRadius: roundedMap[rounded],
            top: 0,
            bottom: 0
          },
          { ...shadowStyle }
        ]}
      />
    </View>
  );
};

export default Button;
