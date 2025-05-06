// /app/form/_layout.tsx
import { Stack } from "expo-router";

function Layout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "#FFFFFF" },
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="swiperDetail" />
    </Stack>
  );
}

export default Layout;
