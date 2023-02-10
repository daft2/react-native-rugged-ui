import { View, TouchableNativeFeedback } from "react-native";
import React from "react";
import { ColorsOptions, SpacingProps } from "../types";
import Text from "./Text";
import { useTheme } from "../provider/ThemeProvider";

type ButtonProps = SpacingProps &
  React.ComponentProps<typeof View> & {
    title: string;
    color?: ColorsOptions;
    textColor?: ColorsOptions;
    shadowColor?: ColorsOptions;
    rounded?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "none";
    shadowPosition?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  };

const Button = ({
  p = "none",
  px = "none",
  py = "sm",
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
  ...props
}: ButtonProps) => {
  const { spacing, colors } = useTheme();

  const roundedMap = {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 10,
    xl: 20,
    full: "100%",
    none: undefined
  };

  const shadowPositionMap = {
    "bottom-right": {
      top: 6,
      bottom: -6,
      right: -6
    },
    "bottom-left": {
      top: 6,
      bottom: -6,
      left: -6
    },
    "top-right": {
      top: -6,
      bottom: 6,
      right: -6
    },
    "top-left": {
      top: -6,
      bottom: 6,
      left: -6
    }
  };

  return (
    <TouchableNativeFeedback>
      <View style={{ position: "relative" }}>
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
        <View
          style={[
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
              ...shadowPositionMap[shadowPosition]
            },
            {
              position: "absolute",
              backgroundColor: colors[shadowColor],
              borderWidth: 1,
              width: "100%",
              zIndex: -10,
              borderRadius: roundedMap[rounded]
            }
          ]}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

export default Button;
