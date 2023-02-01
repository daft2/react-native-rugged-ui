import { Button as RNButton, StyleSheet, View } from "react-native";
import Button from "../components/Button";
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
      <Button title="test" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});
