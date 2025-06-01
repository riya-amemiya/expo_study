import { StyleSheet } from "react-native";

export const pickerContainerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#fff",
    gap: 20,
  },
});

export const pickerStyles = StyleSheet.create({
  picker: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 8,
    elevation: 0,
  },
  pickerItem: {
    fontSize: 16,
    textAlign: "center",
  },
});
