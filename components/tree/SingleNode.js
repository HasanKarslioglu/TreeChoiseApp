import { Pressable, Text, View, StyleSheet } from "react-native";
import GlobalColor from "../../colors/GlobalColors";

function SingleNode({ id, nodeArr, onPress }) {
  const nodeValue = nodeArr.find((node) => node.id === id);

  return (
    <Pressable
      android_ripple={{ color: "red" }}
      onPress={onPress}
      style={{ flex: 1, overflow: "hidden" }}
    >
      <View style={styles.nodeContainer}>
        <Text style={styles.nodeText}>{nodeValue?.value}</Text>
      </View>
    </Pressable>
  );
}

export default SingleNode;

const styles = StyleSheet.create({
  nodeContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: GlobalColor.whiteish,
    flex: 1,
    paddingHorizontal: 12,
    marginHorizontal: 6,
  },
  nodeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalColor.whiteish,
  },
});
