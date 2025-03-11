import {Pressable, StyleSheet, Text, View} from 'react-native';
import {router} from "expo-router";

function HomeScreen() {
  return (
    <View>
      <Pressable onPress={() => router.push('/auth')}><Text>로그인</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
 
});

export default HomeScreen;