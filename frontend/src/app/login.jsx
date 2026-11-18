
import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    Alert,
} from 'react-native';
import { router } from 'expo-router';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function entrar() {
        if (!email || !senha) {
            Alert.alert('Atenção', 'Preencha seu e-mail e sua senha.');
            return;
        }

        router.replace('/(tabs)/mapa');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>BMap</Text>
            <Text style={styles.title}>Bem-vindo de volta!</Text>
            <Text style={styles.subtitle}>Entre na sua conta</Text>

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#888"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <Pressable style={styles.button} onPress={entrar}>
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>

            <Text style={styles.register}>
                Ainda não tem uma conta? Cadastre-se em breve!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        padding: 30,
    },
    logo: {
        color: '#7040A5',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 35,
    },
    title: {
        color: '#333333',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        color: '#777777',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 35,
    },
    input: {
        backgroundColor: '#F3EFF8',
        borderRadius: 12,
        padding: 16,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#7040A5',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
    register: {
        color: '#777777',
        textAlign: 'center',
        marginTop: 25,
    },
});
