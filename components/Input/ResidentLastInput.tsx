import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import Entypo from '@expo/vector-icons/Entypo';
import { lastResidentNumber } from "@/utils/Regx";

// @ts-ignore
function LastResidentNumber({value, onChangeText}) {

  return (
      <View style={{ flexDirection: 'row', width: '50%' }}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          placeholder="1"
          maxLength={1}
          keyboardType="numeric"
        />
        {Array.from({ length: 5 }, (_, i) => (
          <Entypo key={i} name="dot-single" size={25} color="black" />
        ))}
      </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    width: "15%",
    borderBottomWidth: 1,
    textAlign: 'center',
  },
});

export default LastResidentNumber;