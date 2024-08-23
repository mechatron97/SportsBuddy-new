import { Button, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import Onboarding from "./onboarding";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Onboarding />
      
    </View>
  );
}
