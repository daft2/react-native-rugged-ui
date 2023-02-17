import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Button as RNButton, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import Text from "../components/Text";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text variants="h4" mb="sm">
        Button
      </Text>
      <View style={{ width: 100 }}>
        <RNButton title="test" color={"red"} />
      </View>
      <Button
        my="sm"
        p="sm"
        shadowColor="black"
        color="white"
        textColor="black"
        rounded="full"
      >
        Test
      </Button>
      <View style={{ flexDirection: "row" }}>
        <Button
          my="sm"
          p="sm"
          shadowColor="black"
          color="white"
          textColor="black"
          rounded="xl"
          width={100}
        >
          Test
        </Button>

        <Button
          my="sm"
          p="sm"
          shadowColor="black"
          color="white"
          textColor="black"
          rounded="xl"
        >
          Test
        </Button>
      </View>
      <Button
        my="sm"
        shadowColor="black"
        color="white"
        textColor="black"
        width={100}
        height={100}
        rounded="full"
        shadowLength={3}
      >
        <Ionicons name="add" />
      </Button>
      <Card>
        <Text>Test</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  }
});
