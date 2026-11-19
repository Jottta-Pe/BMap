
import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Image,
} from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <View style={styles.content}>
        <Image
          source={require('../../assets/images/logo-bmap.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          Be My Map
        </Text>

        <Text style={styles.subtitle}>
          Seja meu guia.
        </Text>
      </View>

      <View style={styles.loading}>
        <ActivityIndicator
          size="large"
          color="#7040A5"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 260,
    height: 200,
    marginBottom: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7040A5',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2872D8',
    marginTop: 8,
  },
  loading: {
    position: 'absolute',
    bottom: 95,
  },
});
