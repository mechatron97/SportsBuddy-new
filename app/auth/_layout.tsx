import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/home'} />
  } else {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signUp" options={{ headerShown: false }} />
        <Stack.Screen name="signIn" options={{ headerShown: false }} />
      </Stack>
    );
  }

}