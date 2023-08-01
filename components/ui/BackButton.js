import { StyleSheet, View, Pressable, Text } from "react-native";

function BackButton({ onPress }) {

  
  return (
    <View style={styles.buttonContainer}>
      <Pressable android_ripple={{ color: "red" }} onPress={onPress}>
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>
    </View>
  );
}

export default BackButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 6,
    elevation: 1,
    margin: 24,
    maxWidth: 200,
    maxHeight: 100,
    overflow: "hidden",
  },
  buttonText: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
