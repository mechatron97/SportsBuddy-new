import React from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import { useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import Google from '@/components/Google';
import Facebook from '@/components/Facebook';

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace('/');
      } else {
        // Handle errors
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // Handle exceptions
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password, router, signIn, setActive]);

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Email..."
        onChangeText={(text) => setEmailAddress(text)}
        style={styles.input}
      />
      <TextInput
        value={password}
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <Button title="Sign In" onPress={onSignInPress} />
      <View style={styles.footer}>
        <Text>Don't have an account? <Link href="/auth/signUp">Sign Up</Link></Text>
        <Google />
        <Facebook />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
