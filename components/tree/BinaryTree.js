import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SingleNode from "./SingleNode";
import { useState } from "react";
import Stack from "../../class/Stack";
import GlobalColor from "../../colors/GlobalColors";

const nodeArr = [
  {
    id: 1,
    value: "1",
    left: 2,
    right: 3,
  },
  {
    id: 2,
    value: "2",
    left: null,
    right: null,
  },
  {
    id: 3,
    value: "3",
    left: 4,
    right: 5,
  },
  {
    id: 4,
    value: "4",
    left: 6,
    right: 7,
  },
  {
    id: 5,
    value: "5",
    left: null,
    right: null,
  },
  {
    id: 6,
    value: "6",
    left: 8,
    right: 9,
  },
  {
    id: 7,
    value: "7",
    left: null,
    right: null,
  },
  {
    id: 8,
    value: "8",
    left: null,
    right: null,
  },
  {
    id: 9,
    value: "9",
    left: null,
    right: null,
  },
];

const parentHierarchy = new Stack();

const BinaryTree = React.forwardRef(({ onPressBackButton }, ref) => {
  const [currentNodeId, setCurrentNodeId] = useState(1);
  const node = nodeArr.find((node) => node.id === currentNodeId);

  function leftPressHandle() {
    const leftChildId = node?.left;
    if (leftChildId) {
      parentHierarchy.push(node.id);
      setCurrentNodeId(leftChildId);
    }
  }

  function rightPressHandle() {
    const rightChildId = node?.right;
    if (rightChildId) {
      parentHierarchy.push(node.id);
      setCurrentNodeId(rightChildId);
    }
  }

  const backButtonHandler = () => {
    if (parentHierarchy.peek() != null) {
      setCurrentNodeId(parentHierarchy.pop());
    }
  };

  React.useImperativeHandle(ref, () => ({
    backButtonHandler: backButtonHandler,
  }));

  return (
    <>
      <View style={styles.treeContainer}>
        <View style={styles.parentNode}>
          <Text style={styles.parentText}>{node?.value}</Text>
        </View>
        <View style={styles.childNodes}>
          {node?.left && (
            <SingleNode
              id={node.left}
              nodeArr={nodeArr}
              onPress={leftPressHandle}
            />
          )}
          {node?.right && (
            <SingleNode
              id={node.right}
              nodeArr={nodeArr}
              onPress={rightPressHandle}
            />
          )}
        </View>
      </View>
    </>
  );
});

export default BinaryTree;

const styles = StyleSheet.create({
  treeContainer: {
    marginVertical: 120,
    marginHorizontal: 16,
    flex: 1,
  },
  parentNode: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: GlobalColor.whiteish,
    flex: 1,
    marginBottom: 36,
  },
  childNodes: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 2,
  },
  parentText: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalColor.whiteish,
  },
});
