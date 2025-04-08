import { StyleSheet, View } from "react-native";
import { Stack } from "expo-router";

function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signup" />
    </Stack>
  );
}

const styles = StyleSheet.create({});

export default AuthLayout;
