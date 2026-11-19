
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { router } from 'expo-router';

export default function EsqueciSenha() {
  const [email, setEmail] = useState('');

  function enviarInstrucoes() {
    if (!email.trim()) {
      Alert.alert('Atenção', 'Informe seu e-mail.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('E-mail inválido', 'Digite um e-mail válido.');
      return;
    }

    Alert.alert(
      'Solicitação recebida!',
      'Se este e-mail estiver cadastrado, você receberá as instruções para recuperar sua senha.',
      [
        {
          text: 'Voltar ao login',
          onPress: () => router.replace('/login'),
        },
      ]
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>‹ Voltar</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>✉</Text>
        </View>

        <Text style={styles.title}>
          Esqueceu sua senha?
        </Text>

        <Text style={styles.description}>
          Não se preocupe! Informe seu e-mail cadastrado
          e vamos ajudar você a recuperar o acesso
          à sua conta.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#999999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={enviarInstrucoes}
        >
          <Text style={styles.buttonText}>
            Enviar instruções
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Be My Map • Seja meu guia.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
  },

  backButton: {
    marginTop: 55,
    alignSelf: 'flex-start',
  },

  backText: {
    color: '#7040A5',
    fontSize: 17,
    fontWeight: '600',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F0EAF7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  icon: {
    fontSize: 48,
    color: '#7040A5',
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#7040A5',
    textAlign: 'center',
    marginBottom: 15,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
  },

  inputContainer: {
    width: '100%',
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444444',
    marginBottom: 10,
  },

  input: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#D8CBE8',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#333333',
  },

  button: {
    width: '100%',
    backgroundColor: '#7040A5',
    paddingVertical: 17,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footer: {
    alignItems: 'center',
    paddingBottom: 30,
  },

  footerText: {
    color: '#2872D8',
    fontSize: 12,
  },
});

