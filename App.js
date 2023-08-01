import { StyleSheet, View } from "react-native";
import BinaryTree from "./components/tree/BinaryTree";
import BackButton from "./components/ui/BackButton";
import { useRef } from "react";
import GlobalColor from "./colors/GlobalColors";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const binaryTreeRef = useRef();

  function handleBackButtonPressed() {
    binaryTreeRef.current.backButtonHandler();
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <BinaryTree ref={binaryTreeRef} />
        <BackButton onPress={handleBackButtonPressed} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242424",
  },
});
