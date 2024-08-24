import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Input, Button as KittenButton, Text as KittenText, Layout } from '@ui-kitten/components';
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
    <Layout style={styles.container}>
      <KittenText style={styles.title}>Sign In</KittenText>
      <Image source={require('../../assets/images/logo.png')} resizeMode='center' style={styles.logo} />
      <Input
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Email..."
        onChangeText={(text) => setEmailAddress(text)}
        style={styles.input}
      />
      <Input
        value={password}
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <KittenButton onPress={onSignInPress} style={styles.button}>
        Sign In
      </KittenButton>
      <View style={styles.footer}>
        <KittenText>
          Don't have an account? <Link href="/auth/signUp">Sign Up</Link>
        </KittenText>
        <Google />
        <Facebook />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  logo: {
    width: "100%",
    height: undefined,
    aspectRatio: 16 / 9,
    marginBottom: 5
  },
  title: {
    color: 'black',
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 1
},
});
