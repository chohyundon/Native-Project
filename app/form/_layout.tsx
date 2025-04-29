// /app/form/_layout.tsx
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

function Layout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "#FFFFFF" },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Layout;
