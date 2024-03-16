import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HoMEPAGE</Text>
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
      <Button title="Store" onPress={() => navigation.navigate("Store")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
