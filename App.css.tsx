import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  text: {
    fontSize: 25,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  workspace: {
    height: 450,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 25,
  },
});

export { s };
