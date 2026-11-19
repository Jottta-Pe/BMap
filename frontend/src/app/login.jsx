
import React, { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';

import { router } from 'expo-router';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const entrar = () => {
        if (!email.trim() || !senha.trim()) {
            Alert.alert('Atenção', 'Preencha seu e-mail e sua senha.');
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

        if (!emailValido) {
            Alert.alert('E-mail inválido', 'Digite um endereço de e-mail válido.');
            return;
        }

        // Navegação provisória até a integração com o backend.
        router.replace('/(tabs)/mapa');
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

            <View style={styles.header}>
                <Image
                    source={require('../../assets/images/logo-bmap.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.brand}>BMap</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>
                    Que bom ter você aqui!
                </Text>

                <Text style={styles.subtitle}>
                    Entre na sua conta e continue explorando o mundo.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#888888"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

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
                        onPress={() => setMostrarSenha(!mostrarSenha)}
                        style={styles.eyeButton}
                        accessibilityRole="button"
                        accessibilityLabel={
                            mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'
                        }
                    >
                        <Text style={styles.eyeIcon}>
                            {mostrarSenha ? '⊘' : '◉'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={entrar}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => router.push('/esqueci-senha')}
                >
                    <Text style={styles.forgotPassword}>
                        Esqueci minha senha
                    </Text>
                </TouchableOpacity>

                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>
                        Ainda não tem uma conta?
                    </Text>

                    <TouchableOpacity
                        onPress={() => router.push('/cadastro')}
                    >
                        <Text style={styles.registerLink}> Cadastre-se</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.terms}>
                    Ao continuar, você concorda com nossos{' '}
                    <Text style={styles.termsLink}>Termos de Uso</Text>
                    {' '}e{' '}
                    <Text style={styles.termsLink}>
                        Política de Privacidade
                    </Text>.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 25,
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
        fontSize: 19,
    },

    button: {
        width: '80%',
        alignSelf: 'center',
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

    forgotPassword: {
        color: '#2872D8',
        fontSize: 13,
        marginTop: 18,
    },

    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
    },

    registerText: {
        color: '#666666',
        fontSize: 13,
    },

    registerLink: {
        color: '#7040A5',
        fontSize: 13,
        fontWeight: 'bold',
    },

    terms: {
        fontSize: 11,
        color: '#777777',
        textAlign: 'center',
        lineHeight: 18,
        marginTop: 30,
        paddingHorizontal: 5,
    },

    termsLink: {
        color: '#7040A5',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});
