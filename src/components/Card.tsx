import React from "react";
import { View } from "react-native";

type CardProps = React.ComponentProps<typeof View> & {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <View>{children}</View>;
};

export default Card;
