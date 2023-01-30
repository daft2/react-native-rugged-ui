import { View, Text as RNText } from "react-native";
import React from "react";
import { SpacingProps } from "../types";
import Theme from "../styles/Theme";

type TextProps = SpacingProps &
  React.ComponentProps<typeof RNText> & {
    color?: string;
    bgColor?: string;
    fontSize?: string;
    variants?: "h1" | "h2" | "h3" | "h4" | "h5" | "default";
    weight?:
      | "bold"
      | "normal"
      | "100"
      | "200"
      | "300"
      | "400"
      | "500"
      | "600"
      | "700"
      | "800"
      | "900"
      | undefined;
    children: React.ReactNode;
  };

type TextVariantsProps = {
  [key: string]: {
    fontSize: number;
    lineHeight?: number;
  };
};

const Text = ({
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
  color = "black",
  bgColor = "transparent",
  variants = "default",
  weight = "normal",
  ...props
}: TextProps) => {
  const textVariants: TextVariantsProps = {
    h1: {
      fontSize: 48,
      lineHeight: 60,
    },
    h2: {
      fontSize: 36,
      lineHeight: 46,
    },
    h3: {
      fontSize: 30,
      lineHeight: 38,
    },
    h4: {
      fontSize: 24,
      lineHeight: 30,
    },
    h5: {
      fontSize: 20,
      lineHeight: 24,
    },
    default: {
      fontSize: 14,
    },
  };

  return (
    <View>
      <RNText
        style={[
          props.style,
          // Spacing Styling
          {
            padding: Theme.spacing[p],
            paddingHorizontal: Theme.spacing[px],
            paddingVertical: Theme.spacing[py],
            paddingTop: Theme.spacing[pt],
            paddingRight: Theme.spacing[pr],
            paddingBottom: Theme.spacing[pb],
            paddingLeft: Theme.spacing[pl],
            margin: Theme.spacing[m],
            marginHorizontal: Theme.spacing[mx],
            marginVertical: Theme.spacing[my],
            marginTop: Theme.spacing[mt],
            marginRight: Theme.spacing[mr],
            marginBottom: Theme.spacing[mb],
            marginLeft: Theme.spacing[ml],
          },
          // Text Styling
          {
            color: color,
            backgroundColor: bgColor,
            fontWeight: weight,
            ...textVariants[variants],
          },
        ]}
      >
        {props.children}
      </RNText>
    </View>
  );
};

export default Text;
