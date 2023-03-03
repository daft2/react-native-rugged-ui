import React from "react";
import { TextInput, View, ViewStyle } from "react-native";
import { useTheme } from "../provider/ThemeProvider";
import type { SpacingProps, ColorsOptions } from "../types/index";

type InputProps = SpacingProps &
  React.ComponentProps<typeof View> & {
    backgroundColor?: ColorsOptions;
    borderWidth?: number;
    borderColor?: ColorsOptions;
    width?: number | string;
    height?: number | string;
    style?: ViewStyle;
    shadowPosition?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
    shadowLength?: number;
    shadowStyle?: ViewStyle;
    shadowColor?: ColorsOptions;
    fontFamily?: "Satoshi700" | "Switzer100" | "Switzer200" | "Switzer300";
  };

const Input = ({
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
  backgroundColor = "white",
  borderWidth = 1,
  borderColor,
  shadowPosition = "bottom-right",
  shadowLength = 6,
  shadowStyle,
  shadowColor = "black",
  width,
  height,
  fontFamily = "Switzer200",
  style
}: InputProps) => {
  const { spacing, colors, fonts } = useTheme();

  const shadowPositionMap = {
    "bottom-right": {
      top: shadowLength,
      bottom: shadowLength * -1,
      right: shadowLength * -1,
      left: shadowLength
    },
    "bottom-left": {
      top: shadowLength,
      bottom: shadowLength * -1,
      right: shadowLength,
      left: shadowLength * -1
    },
    "top-right": {
      top: shadowLength * -1,
      bottom: shadowLength,
      right: shadowLength * -1,
      left: shadowLength
    },
    "top-left": {
      top: shadowLength * -1,
      bottom: shadowLength,
      right: shadowLength,
      left: shadowLength * -1
    }
  };

  const containerMarginStyle = {
    "bottom-right": {
      marginBottom: shadowLength,
      marginRight: shadowLength
    },
    "bottom-left": {
      marginBottom: shadowLength,
      marginLeft: shadowLength
    },
    "top-right": {
      marginTop: shadowLength,
      marginRight: shadowLength
    },
    "top-left": {
      marginTop: shadowLength,
      marginLeft: shadowLength
    }
  };

  return (
    <View
      style={[
        {
          position: "relative",
          width: width,
          height: height
        },
        containerMarginStyle[shadowPosition]
      ]}
    >
      <View
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
            paddingHorizontal: 10,
            paddingVertical: 5,
            position: "relative",
            backgroundColor: colors[backgroundColor],
            borderWidth: borderWidth,
            borderColor: borderColor
              ? colors[borderColor]
              : colors[shadowColor],
            width: width,
            height: height
          },
          style
        ]}
      >
        <TextInput style={{ fontFamily: fonts[fontFamily] }} />
      </View>
      <View
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
            ...shadowPositionMap[shadowPosition],
            position: "absolute",
            backgroundColor: colors[shadowColor],
            zIndex: -10,
            width: width,
            height: height
          },
          { ...shadowStyle }
        ]}
      />
    </View>
  );
};

export default Input;
