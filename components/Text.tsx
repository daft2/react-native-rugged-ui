import { View, Text as RNText } from "react-native";
import React from "react";
import { ColorsOptions, SpacingProps } from "../types";
import { useTheme } from "../provider/ThemeProvider";

type TextProps = SpacingProps &
  React.ComponentProps<typeof RNText> & {
    color?: ColorsOptions;
    bgColor?: ColorsOptions;
    fontSize?: number | undefined;
    variants?:
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6"
      | "subtitle1"
      | "subtitle2"
      | "paragraph1"
      | "paragraph2"
      | "paragraph3"
      | "none";
    weight?: "light" | "medium" | "regular" | "bold" | undefined;
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
  variants = "paragraph2",
  weight = "medium",
  fontFamily = "switzer-medium",
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
    }
  };

  const weightMap = {
    light: fonts.Switzer100,
    medium: fonts.Switzer200,
    regular: fonts.Switzer300,
    bold: fonts.Satoshi700
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
            fontFamily: weightMap[weight],
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
