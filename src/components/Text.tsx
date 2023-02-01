import { View, Text as RNText } from "react-native";
import React from "react";
import { SpacingProps } from "../types";
import Theme from "../styles/Theme";

type TextProps = SpacingProps &
  React.ComponentProps<typeof RNText> & {
    color?: string;
    bgColor?: string;
    fontSize?: number | undefined;
    variants?: "h1" | "h2" | "h3" | "h4" | "h5" | "s1" | "s2" | "p" | "none";
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
    fontFamily?: string;
    children: React.ReactNode;
  };

type TextVariantsProps = {
  [key: string]: {
    fontSize?: number;
    lineHeight?: number;
    fontFamily?: string;
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
  variants = "none",
  weight,
  fontFamily = "satoshi",
  fontSize,
  ...props
}: TextProps) => {
  const textVariants: TextVariantsProps = {
    h1: {
      fontSize: 48,
      lineHeight: 52,
      fontFamily: "satoshi-bold"
    },
    h2: {
      fontSize: 36,
      lineHeight: 40,
      fontFamily: "satoshi-bold"
    },
    h3: {
      fontSize: 30,
      lineHeight: 34,
      fontFamily: "satoshi-bold"
    },
    h4: {
      fontSize: 24,
      lineHeight: 28,
      fontFamily: "satoshi-bold"
    },
    h5: {
      fontSize: 20,
      lineHeight: 24,
      fontFamily: "satoshi-bold"
    },
    s1: {
      fontSize: 24,
      lineHeight: 26,
      fontFamily: "satoshi-medium"
    },
    s2: {
      fontSize: 18,
      lineHeight: 22,
      fontFamily: "satoshi-medium"
    },
    p: {
      fontSize: 16,
      fontFamily: "satoshi"
    },
    none: {}
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
            marginLeft: Theme.spacing[ml]
          },
          // Text Styling
          {
            color: color,
            backgroundColor: bgColor,
            fontWeight: weight,
            fontFamily: fontFamily,
            fontSize: fontSize,
            ...textVariants[variants]
          }
        ]}
      >
        {props.children}
      </RNText>
    </View>
  );
};

export default Text;
