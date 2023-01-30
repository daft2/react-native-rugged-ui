import { View, Text as RNText } from "react-native";
import React from "react";
import { SpacingProps } from "../types";
import Theme from "../styles/theme";

type TextProps = SpacingProps &
  React.ComponentProps<typeof RNText> & {
    color?: string;
    bgColor?: string;
    fontSize?: string;
    children: React.ReactNode;
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
  ...props
}: TextProps) => {
  return (
    <View>
      <RNText
        style={[
          props.style,
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
        ]}
      >
        {props.children}
      </RNText>
    </View>
  );
};

export default Text;
