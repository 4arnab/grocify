import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="text-lg text-green-500 underline">
        Edit src/app/index.tsx to edit this screen.
      </Text>
      <Image
        source={require("../../assets/images/react-logo.png")}
        className="w-12 h-12 mt-4 bg-blue-50 p-4 rounded-sm"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#10677d",
  },
});
