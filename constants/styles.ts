import { StyleSheet } from 'react-native';
import { Colors } from './Colors';  // Update with the correct path

export const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary,   // Use the primary color for the title text
        marginBottom: 16,
    },
    page: {
        flex: 1,
        backgroundColor: Colors.secondary,  // Use the secondary color as the background
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 16,   
        color: Colors.text,  // Use the text color from the color scheme
    },
    button: {
        marginTop: 16,
        backgroundColor: Colors.accent,  // Use the accent color for the button background
        padding: 10,
        borderRadius: 5,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primaryLight,  // Use the highlight color for the container background
    },
});
