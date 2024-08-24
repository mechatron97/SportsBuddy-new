import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Input, Button as KittenButton, Text as KittenText, Layout } from '@ui-kitten/components';
import { useSignUp } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import Google from '@/components/Google';
import Facebook from '@/components/Facebook';

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState('');

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace('/');
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <Layout style={styles.container}>
      <KittenText style={styles.title}>Sign Up</KittenText>
      <Image source={require('../../assets/images/logo.png')} resizeMode='center' style={styles.logo} />
      {!pendingVerification ? (
        <>
          <Input
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Email..."
            onChangeText={setEmailAddress}
            style={styles.input}
          />
          <Input
            value={password}
            placeholder="Password..."
            secureTextEntry={true}
            onChangeText={setPassword}
            style={styles.input}
          />
          <KittenButton onPress={onSignUpPress} style={styles.button}>
            Sign Up
          </KittenButton>
          <KittenText style={styles.text}>
            Have an account? <Link href="/auth/signIn">Sign In</Link>
          </KittenText>
          <Google />
          <Facebook />
        </>
      ) : (
        <>
          <Input
            value={code}
            placeholder="Code..."
            onChangeText={setCode}
            style={styles.input}
          />
          <KittenButton onPress={onPressVerify} style={styles.button}>
            Verify Email
          </KittenButton>
        </>
      )}
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
  text: {
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    width: "100%",
    height: undefined,
    aspectRatio: 16 / 9,
    marginBottom: 10
  },
  title: {
    color: 'black',
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 1,
},
});
