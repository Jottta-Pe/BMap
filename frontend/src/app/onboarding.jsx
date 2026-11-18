
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <View style={styles.content}>
        <Image
          source={require('../../assets/images/icone-acessibilidade.png')}
          style={styles.icon}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          Autonomia para ir além.
        </Text>

        <Text style={styles.description}>
          Explore sem limites! Encontre lugares acessíveis,
          descubra novos caminhos e tenha mais autonomia
          no seu dia a dia.
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          <View style={styles.activeDot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/login')}
        >
          <Text style={styles.buttonText}>
            Vamos começar
          </Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Be My Map • Seja meu guia.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 180,
    height: 180,
    marginBottom: 35,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7040A5',
    textAlign: 'center',
    marginBottom: 18,
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    color: '#555555',
    textAlign: 'center',
    paddingHorizontal: 8,
  },

  footer: {
    alignItems: 'center',
    paddingBottom: 35,
  },

  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
    gap: 8,
  },

  activeDot: {
    width: 24,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#7040A5',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#D8CBE8',
  },

  button: {
    width: '75%',
    backgroundColor: '#7040A5',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footerText: {
    marginTop: 18,
    color: '#2872D8',
    fontSize: 12,
  },
});
