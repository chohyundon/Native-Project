import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen name="mypage" options={{ headerTitle: "마이 페이지" }} />
    </Tabs>
  );
}
