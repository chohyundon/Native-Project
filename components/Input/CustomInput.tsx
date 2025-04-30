import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { ForwardedRef, forwardRef } from "react";

interface InputFieldProps extends TextInputProps {
  label?: string;
  error?: string;
  placeholder?: string;
  size?: "medium" | "large" | "another";
}

function CustomTextInput(
  { label, placeholder, size = "large", error, ...props }: InputFieldProps,
  ref: ForwardedRef<TextInput>
) {
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={[styles.title]}>{label}</Text>}
      <TextInput
        ref={ref}
        autoCapitalize="none"
        spellCheck={false}
        autoCorrect={false}
        placeholder={placeholder}
        style={[styles.container, styles[size], error && styles.errorBorder]}
        {...props}
      />
      <View style={{ minHeight: 30 }}>
        {error && <Text style={[styles.errorFont]}>{error}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0.3,
    justifyContent: "center",
  },

  title: {
    fontSize: 14,
    color: "gray",
  },

  mediumTitle: {
    flex: 1,
  },

  container: {
    width: "100%",
    borderBottomWidth: 1,
    fontSize: 16,
    height: 30,
  },

  another: {},

  large: {},

  medium: {
    // width: "100%",
    // borderBottomWidth: 1,
    // fontSize: 16,
    // height: 30,
  },

  errorBorder: {
    borderColor: "red",
  },

  mediumError: {},

  errorFont: {
    color: "red",
  },
});

export default forwardRef(CustomTextInput);
