import {StyleSheet, Text, TextInput, TextInputProps, View} from "react-native";
import {ForwardedRef, forwardRef} from "react";

interface InputFieldProps extends TextInputProps {
  label?: string
  error?: string
  placeholder?: string
}


function CustomTextInput({label, placeholder, error,  ...props }: InputFieldProps, ref: ForwardedRef<TextInput>) {
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.title}>{label}</Text>}
      <TextInput
        ref={ref}
        autoCapitalize="none"
        spellCheck={false}
        autoCorrect={false}
        placeholder={placeholder}
        style={[styles.container, error && styles.errorBorder]}
        {...props}
      />
      {error && <Text style={styles.errorFont}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0.2,
    justifyContent: 'center',
  },

  title: {
    fontSize: 14,
    color: 'gray'
  },

  container: {
    width: "100%",
    borderBottomWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 3,
    fontSize: 16,
  },

  errorBorder: {
    borderColor: 'red',
  },

  errorFont: {
    color: 'red',
    paddingHorizontal: 3,
    position: 'absolute',
    top: 70,
  },
});

export default forwardRef(CustomTextInput);
