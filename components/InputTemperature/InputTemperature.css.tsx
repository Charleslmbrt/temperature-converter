import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  input: {
    backgroundColor: "white",
    paddingLeft: 20,
    paddingVertical: 15,
    borderRadius: 20,
    alignSelf: "stretch",
    fontSize: 20,
  },
  unit: {
    position: "absolute",
    alignSelf: "flex-end",
    fontSize: 25,
    paddingRight: 10,
    fontWeight: "bold",
  },
});

export { s };
