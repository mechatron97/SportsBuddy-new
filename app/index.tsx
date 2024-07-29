import { Text, View } from "react-native";
import { colors } from "@/theme/colors";
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
      <Text style={{ fontSize: 24, color: colors.primary }}>Hello World</Text>
      <Link href={"/profile"}>Go To Profile</Link>
    </View>
  );
}
