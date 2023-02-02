import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../../types";
import Text from "../components/Text";
import React from "react";

export default function TypographyScreen({
  navigation
}: RootTabScreenProps<"Typography">) {
  return (
    <View style={styles.container}>
      <Text variants="h4" mb="sm">
        Heading
      </Text>
      <Text variants="h1">Heading 1</Text>
      <Text variants="h2">Heading 2</Text>
      <Text variants="h3">Heading 3</Text>
      <Text variants="h4">Heading 4</Text>
      <Text variants="h5">Heading 5</Text>
      <Text variants="h4" py="sm">
        Subtitle
      </Text>
      <Text variants="s1">Subtitle text 1</Text>
      <Text variants="s2">Subtitle text 2</Text>
      <Text variants="h4" py="sm">
        Paragraph
      </Text>
      <Text variants="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        beatae eius sint nisi molestiae maiores nihil deleniti dolor. Nihil,
        vitae.
      </Text>
      <Text variants="h4" py="sm">
        Regular
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        beatae eius sint nisi molestiae maiores nihil deleniti dolor. Nihil,
        vitae.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});
