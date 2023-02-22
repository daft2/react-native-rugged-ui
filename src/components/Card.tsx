import React from "react";
import { View, ViewStyle } from "react-native";
import { useTheme } from "../provider/ThemeProvider";
import { ColorsOptions, SpacingProps } from "../types";

type CardProps = SpacingProps &
  React.ComponentProps<typeof View> & {
    children: React.ReactNode;
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
  };

const Card = ({
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
  width,
  height,
  shadowPosition = "bottom-right",
  shadowLength = 6,
  shadowStyle,
  shadowColor = "black",
  children,
  style
}: CardProps) => {
  const { spacing, colors } = useTheme();

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

  return (
    <View
      style={{
        position: "relative",
        marginBottom: shadowLength
      }}
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
          // automatically set flex to 1 if height isn't set
          !height && { flex: 1 },
          {
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
        {children}
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

export default Card;
