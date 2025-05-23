import { SplashScreen, Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  useEffect(() => {
    const load = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      await SplashScreen.hideAsync();
    };

    load();
  }, []);

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen name="mypage" options={{ headerTitle: "마이 페이지" }} />
      <Tabs.Screen
        name="aipage"
        options={{
          headerTitle: "ai 페이지",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "robot" : "robot-outline"}
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  );
}
