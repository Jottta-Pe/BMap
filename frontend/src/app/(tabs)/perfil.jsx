
import React, { useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
source={require('../../assets/images/icone-acessibilidade.jpg')}

export default function Perfil() {
    const [nome] = useState('Usuário BMap');

    const avisar = (recurso) => {
        Alert.alert(
            'BMap',
            `${recurso} será integrado em breve!`
        );
    };

    const opcoes = [
        {
            titulo: 'Meus dados',
            descricao: 'Informações pessoais e conta',
            icone: 'person-outline',
        },
        {
            titulo: 'Acessibilidade',
            descricao: 'Configure suas preferências',
            icone: 'accessibility-outline',
        },
        {
            titulo: 'Notificações',
            descricao: 'Gerencie seus avisos',
            icone: 'notifications-outline',
        },
        {
            titulo: 'Privacidade e segurança',
            descricao: 'Controle seus dados',
            icone: 'shield-checkmark-outline',
        },
        {
            titulo: 'Ajuda e suporte',
            descricao: 'Precisa de ajuda?',
            icone: 'help-circle-outline',
        },
    ];

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#F8F6FC"
                barStyle="dark-content"
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                {/* CABEÇALHO */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.logo}>BMap</Text>
                        <Text style={styles.subtitle}>Sua conta</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.settingsButton}
                        onPress={() => avisar('Configurações')}
                    >
                        <Ionicons
                            name="settings-outline"
                            size={24}
                            color="#7040A5"
                        />
                    </TouchableOpacity>
                </View>

                {/* PERFIL */}
                <View style={styles.profileCard}>
                    <View style={styles.avatar}>
                        <Ionicons
                            name="person"
                            size={52}
                            color="#7040A5"
                        />
                    </View>

                    <Text style={styles.userName}>{nome}</Text>

                    <Text style={styles.userEmail}>
                        usuario@bmap.com
                    </Text>

                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => avisar('Editar perfil')}
                    >
                        <Ionicons
                            name="create-outline"
                            size={17}
                            color="#7040A5"
                        />
                        <Text style={styles.editText}>
                            Editar perfil
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* RESUMO */}
                <Text style={styles.sectionTitle}>
                    Minha experiência
                </Text>

                <View style={styles.summaryContainer}>
                    <TouchableOpacity
                        style={styles.summaryCard}
                        onPress={() => avisar('Meus favoritos')}
                    >
                        <Ionicons
                            name="heart"
                            size={25}
                            color="#D94C75"
                        />
                        <Text style={styles.summaryNumber}>03</Text>
                        <Text style={styles.summaryLabel}>
                            Favoritos
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.summaryCard}
                        onPress={() => avisar('Histórico')}
                    >
                        <Ionicons
                            name="time-outline"
                            size={25}
                            color="#7040A5"
                        />
                        <Text style={styles.summaryNumber}>--</Text>
                        <Text style={styles.summaryLabel}>
                            Histórico
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* CONFIGURAÇÕES */}
                <Text style={styles.sectionTitle}>
                    Preferências e configurações
                </Text>

                <View style={styles.optionsCard}>
                    {opcoes.map((opcao, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.option,
                                index !== opcoes.length - 1 &&
                                    styles.optionBorder,
                            ]}
                            onPress={() => avisar(opcao.titulo)}
                        >
                            <View style={styles.optionIcon}>
                                <Ionicons
                                    name={opcao.icone}
                                    size={23}
                                    color="#7040A5"
                                />
                            </View>

                            <View style={styles.optionInfo}>
                                <Text style={styles.optionTitle}>
                                    {opcao.titulo}
                                </Text>

                                <Text style={styles.optionDescription}>
                                    {opcao.descricao}
                                </Text>
                            </View>

                            <Ionicons
                                name="chevron-forward"
                                size={20}
                                color="#AAA2B2"
                            />
                        </TouchableOpacity>
                    ))}
                </View>

                {/* SOBRE */}
                <TouchableOpacity
                    style={styles.aboutButton}
                    onPress={() => avisar('Sobre o BMap')}
                >
                    <Ionicons
                        name="information-circle-outline"
                        size={21}
                        color="#7040A5"
                    />
                    <Text style={styles.aboutText}>
                        Sobre o BMap
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={() => avisar('Sair da conta')}
                >
                    <Ionicons
                        name="log-out-outline"
                        size={20}
                        color="#D94C75"
                    />
                    <Text style={styles.logoutText}>
                        Sair da conta
                    </Text>
                </TouchableOpacity>

                <Text style={styles.version}>
                    BMap • Versão 1.0.0
                </Text>

                <Text style={styles.footer}>
                    Acessibilidade para todos 💜
                </Text>
            </ScrollView>

            <BottomNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F6FC',
    },

    content: {
        padding: 20,
        paddingBottom: 25,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },

    logo: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#7040A5',
    },

    subtitle: {
        fontSize: 12,
        color: '#777777',
        marginTop: 3,
    },

    settingsButton: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: '#EFE8F8',
        alignItems: 'center',
        justifyContent: 'center',
    },

    profileCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 22,
        padding: 24,
        alignItems: 'center',
        marginBottom: 27,
        elevation: 3,
    },

    avatar: {
        width: 105,
        height: 105,
        borderRadius: 53,
        backgroundColor: '#EFE8F8',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14,
    },

    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#30243D',
    },

    userEmail: {
        fontSize: 12,
        color: '#89818F',
        marginTop: 5,
    },

    editButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3EEF8',
        paddingHorizontal: 17,
        paddingVertical: 10,
        borderRadius: 12,
        marginTop: 17,
    },

    editText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#7040A5',
        marginLeft: 7,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#30243D',
        marginBottom: 13,
    },

    summaryContainer: {
        flexDirection: 'row',
        gap: 13,
        marginBottom: 27,
    },

    summaryCard: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 17,
        padding: 17,
        alignItems: 'center',
        elevation: 2,
    },

    summaryNumber: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#30243D',
        marginTop: 9,
    },

    summaryLabel: {
        fontSize: 11,
        color: '#89818F',
        marginTop: 3,
    },

    optionsCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        paddingHorizontal: 15,
        marginBottom: 20,
        elevation: 2,
    },

    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },

    optionBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#F0ECF4',
    },

    optionIcon: {
        width: 42,
        height: 42,
        borderRadius: 13,
        backgroundColor: '#F3EEF8',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },

    optionInfo: {
        flex: 1,
    },

    optionTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#30243D',
    },

    optionDescription: {
        fontSize: 10,
        color: '#89818F',
        marginTop: 4,
    },

    aboutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
    },

    aboutText: {
        fontSize: 12,
        color: '#7040A5',
        fontWeight: 'bold',
        marginLeft: 8,
    },

    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
        marginTop: 3,
    },

    logoutText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#D94C75',
        marginLeft: 8,
    },

    version: {
        textAlign: 'center',
        fontSize: 10,
        color: '#AAA2B2',
        marginTop: 15,
    },

    footer: {
        textAlign: 'center',
        fontSize: 11,
        color: '#A49BAE',
        marginTop: 8,
    },
});
