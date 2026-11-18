
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        {/* Cabeçalho */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/logo-bmap.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.brand}>BMap</Text>
        </View>

        {/* Conteúdo */}
        <View style={styles.content}>
          <Text style={styles.title}>
            Crie sua conta!
          </Text>

          <Text style={styles.subtitle}>
            Faça parte do BMap e descubra um mundo com mais acessibilidade.
          </Text>

          {/* Nome */}
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            placeholderTextColor="#888888"
            autoCapitalize="words"
            value={nome}
            onChangeText={setNome}
          />

          {/* E-mail */}
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#888888"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Senha */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Senha"
              placeholderTextColor="#888888"
              secureTextEntry={!mostrarSenha}
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setMostrarSenha(!mostrarSenha)}
            >
              <Text style={styles.eyeIcon}>
                {mostrarSenha ? '⊘' : '◉'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Confirmar senha */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirmar senha"
              placeholderTextColor="#888888"
              secureTextEntry={!mostrarConfirmacao}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
            />

            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() =>
                setMostrarConfirmacao(!mostrarConfirmacao)
              }
            >
              <Text style={styles.eyeIcon}>
                {mostrarConfirmacao ? '⊘' : '◉'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Botão cadastrar */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Criar conta
            </Text>
          </TouchableOpacity>

          {/* Login */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>
              Já possui uma conta?
            </Text>

            <TouchableOpacity onPress={() => router.replace('/login')}>
              <Text style={styles.loginLink}>
                {' '}Entrar
              </Text>
            </TouchableOpacity>
          </View>

          {/* Termos */}
          <Text style={styles.terms}>
            Ao continuar, você concorda com nossos{' '}
            <Text style={styles.termsLink}>
              Termos de Uso
            </Text>
            {' '}e{' '}
            <Text style={styles.termsLink}>
              Política de Privacidade
            </Text>.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
  },

  scrollContent: {
    flexGrow: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },

  logo: {
    width: 75,
    height: 75,
  },

  brand: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#7040A5',
    marginLeft: 10,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7040A5',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 23,
    color: '#666666',
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: '#D8CBE8',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 16,
    fontSize: 15,
    color: '#333333',
  },

  passwordContainer: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: '#D8CBE8',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#333333',
  },

  eyeButton: {
    paddingHorizontal: 15,
    height: '100%',
    justifyContent: 'center',
  },

  eyeIcon: {
    fontSize: 21,
    color: '#000000',
  },

  button: {
    width: '80%',
    backgroundColor: '#7040A5',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  loginText: {
    color: '#666666',
    fontSize: 13,
  },

  loginLink: {
    color: '#7040A5',
    fontSize: 13,
    fontWeight: 'bold',
  },

  terms: {
    fontSize: 11,
    color: '#777777',
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 25,
    paddingHorizontal: 5,
  },

  termsLink: {
    color: '#7040A5',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
