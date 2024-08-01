import { Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, color: Colors.primary }}>Welcome</Text>
      <Link href="/auth">Continue</Link>
    </View>
  );
}
