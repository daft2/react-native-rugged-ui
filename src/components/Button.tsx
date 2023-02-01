import { View, Text } from "react-native";
import React from "react";
import { SpacingProps } from "../types";
import Theme from "../styles/Theme";

type ButtonProps = SpacingProps &
  React.ComponentProps<typeof View> & {
    title: string;
    color?: string;
    textColor?: string;
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
  color = "blue",
  textColor = "white",
  ...props
}: ButtonProps) => {
  return (
    <View
      {...props}
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
        {
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color
        }
      ]}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </View>
  );
};

export default Button;
