
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function MeusDados() {
    const [nome, setNome] = useState('Usuário BMap');
    const [email, setEmail] = useState('usuario@bmap.com');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('São Paulo');

    const salvar = () => {
        if (!nome.trim() || !email.trim()) {
            Alert.alert('Atenção', 'Preencha nome e e-mail.');
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) {
            Alert.alert('E-mail inválido', 'Digite um endereço de e-mail válido.');
            return;
        }

        Alert.alert(
            'Dados atualizados!',
            'Suas alterações foram aplicadas nesta demonstração.'
        );
    };

    const Campo = ({ titulo, valor, alterar, placeholder, teclado }) => (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{titulo}</Text>
            <TextInput
                style={styles.input}
                value={valor}
                onChangeText={alterar}
                placeholder={placeholder}
                placeholderTextColor="#AAA2B2"
                keyboardType={teclado || 'default'}
                autoCapitalize="none"
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#F8F6FC" barStyle="dark-content" />

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.backButton}
                >
                    <Ionicons name="arrow-back" size={23} color="#7040A5" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Meus dados</Text>

                <View style={{ width: 42 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <Ionicons name="person" size={48} color="#7040A5" />
                    </View>
                    <Text style={styles.avatarTitle}>Informações pessoais</Text>
                    <Text style={styles.avatarSubtitle}>
                        Mantenha seus dados atualizados
                    </Text>
                </View>

                <View style={styles.form}>
                    <Campo
                        titulo="Nome completo"
                        valor={nome}
                        alterar={setNome}
                        placeholder="Digite seu nome"
                    />

                    <Campo
                        titulo="E-mail"
                        valor={email}
                        alterar={setEmail}
                        placeholder="Digite seu e-mail"
                        teclado="email-address"
                    />

                    <Campo
                        titulo="Telefone"
                        valor={telefone}
                        alterar={setTelefone}
                        placeholder="(11) 99999-9999"
                        teclado="phone-pad"
                    />

                    <Campo
                        titulo="Cidade"
                        valor={cidade}
                        alterar={setCidade}
                        placeholder="Digite sua cidade"
                    />
                </View>

                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={salvar}
                >
                    <Ionicons name="save-outline" size={20} color="#FFFFFF" />
                    <Text style={styles.saveButtonText}>Salvar alterações</Text>
                </TouchableOpacity>

                <View style={styles.infoBox}>
                    <Ionicons
                        name="information-circle-outline"
                        size={21}
                        color="#7040A5"
                    />
                    <Text style={styles.infoText}>
                        Os dados são mantidos apenas enquanto esta tela
                        permanece aberta. A integração com a conta será
                        realizada pelo backend.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F6FC',
        paddingHorizontal: 20,
    },
    header: {
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backButton: {
        width: 42,
        height: 42,
        borderRadius: 14,
        backgroundColor: '#EFE8F8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#30243D',
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 30,
    },
    avatar: {
        width: 95,
        height: 95,
        borderRadius: 48,
        backgroundColor: '#EFE8F8',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 13,
    },
    avatarTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#30243D',
    },
    avatarSubtitle: {
        fontSize: 11,
        color: '#89818F',
        marginTop: 5,
    },
    form: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 18,
        elevation: 2,
    },
    fieldContainer: {
        marginBottom: 18,
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#51465E',
        marginBottom: 8,
    },
    input: {
        height: 48,
        backgroundColor: '#F8F6FC',
        borderRadius: 11,
        paddingHorizontal: 14,
        fontSize: 13,
        color: '#30243D',
        borderWidth: 1,
        borderColor: '#EEE9F3',
    },
    saveButton: {
        height: 52,
        backgroundColor: '#7040A5',
        borderRadius: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22,
        gap: 9,
    },
    saveButtonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    infoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFE8F8',
        borderRadius: 13,
        padding: 14,
        marginTop: 20,
        marginBottom: 30,
        gap: 9,
    },
    infoText: {
        flex: 1,
        fontSize: 10,
        lineHeight: 16,
        color: '#5F4A75',
    },
});

