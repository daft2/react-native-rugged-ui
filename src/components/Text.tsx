import { View, Text as RNText } from "react-native";
import React from "react";
import { ColorsOptions, SpacingProps } from "../types";
import { useTheme } from "../provider/ThemeProvider";

type TextProps = SpacingProps &
  React.ComponentProps<typeof RNText> & {
    color?: ColorsOptions;
    bgColor?: ColorsOptions;
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
  const { spacing, colors, fonts } = useTheme();
  const textVariants: TextVariantsProps = {
    h1: {
      fontSize: 40,
      fontFamily: fonts.Satoshi700
    },
    h2: {
      fontSize: 32,
      fontFamily: fonts.Satoshi700
    },
    h3: {
      fontSize: 28,
      fontFamily: fonts.Satoshi700
    },
    h4: {
      fontSize: 20,
      fontFamily: fonts.Satoshi700
    },
    h5: {
      fontSize: 16,
      fontFamily: fonts.Satoshi700
    },
    h6: {
      fontSize: 12,
      fontFamily: fonts.Satoshi700
    },
    subtitle1: {
      fontSize: 20,
      fontFamily: fonts.Switzer300
    },
    subtitle2: {
      fontSize: 16,
      fontFamily: fonts.Switzer300
    },
    paragraph1: {
      fontSize: 16,
      fontFamily: fonts.Switzer200
    },
    paragraph2: {
      fontSize: 12,
      fontFamily: fonts.Switzer200
    },
    paragraph3: {
      fontSize: 10,
      fontFamily: fonts.Switzer200
    },
    none: {}
  };
  return (
    <View>
      <RNText
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
          // Text Styling
          {
            color: colors[color],
            backgroundColor: colors[bgColor],
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
