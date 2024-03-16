import { StyleSheet, Text, View } from "react-native";

const Store = () => {
  return (
    <View style={styles.container}>
      <Text>StorePAGE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Store;
