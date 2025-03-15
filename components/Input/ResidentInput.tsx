import {StyleSheet, Text, TextInput, View} from "react-native";

// @ts-ignore
function ResidentInput({ value, onChangeText, error }) {

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.input]}
        placeholder="012345"
        maxLength={6}
        keyboardType="numeric"
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "35%",
    minHeight: 35,
  },

  input: {
    borderBottomWidth: 1,
    height: 30,
    fontSize: 16,
  },

  error: {
    position: "absolute",
    color: "red",
    width: 300,
    paddingVertical: 5,
    top: 30,
    paddingLeft: 3,
  },
});

export default ResidentInput;
