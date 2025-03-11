import { StyleSheet, View } from "react-native";
import CustomButton from "@/components/button/CustomButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface FixedButtonProps {
  label: string;
  onPress: () => void;
}

function FixedButton({ label, onPress }: FixedButtonProps) {
  const inset = useSafeAreaInsets();

  return (
    <View style={[{ paddingTop: inset.top }, styles.container]}>
      <CustomButton label={label} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});

export default FixedButton;
