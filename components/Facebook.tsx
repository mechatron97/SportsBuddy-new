import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import { View, Button, StyleSheet } from 'react-native'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking';
import { Layout, Button as KittenButton } from '@ui-kitten/components';

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function Facebook() {
  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_facebook' })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/dashboard', { scheme: 'sportsbuddy' }),
      })

      if (createdSessionId) {
        setActive!({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

  return (
    <View>
      <Layout style={styles.container}>
      <KittenButton onPress={onPress} style={styles.button}>
        Sign in with Facebook
      </KittenButton>
    </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  button: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#4285F4',
    color: 'white',
    borderRadius: 5,
    borderColor: 'transparent',
  },
});