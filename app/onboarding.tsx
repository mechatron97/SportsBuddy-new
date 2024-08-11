import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { Colors } from "../constants/Colors";
import { styles } from "../constants/styles";

export default function Onboarding() {
    return (
        <View
            style={styles.container}
        >
            <Stack.Screen options={{ headerShown: false }} />
            <Text style={styles.title}>Onboarding</Text>
        </View>
    );
}