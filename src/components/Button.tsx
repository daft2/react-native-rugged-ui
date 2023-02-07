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
  ...props
}: ButtonProps) => {
  const { spacing, colors } = useTheme();

  return (
    <TouchableNativeFeedback>
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
            backgroundColor: colors[color]
          }
        ]}
      >
        <Text color={textColor} variants="h5">
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Button;
