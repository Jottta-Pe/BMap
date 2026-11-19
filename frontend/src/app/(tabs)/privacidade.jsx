
import React, { useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Switch,
    Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import BottomNav from '../../components/BottomNav';

export default function Privacidade() {
    const [compartilharLocalizacao, setCompartilharLocalizacao] = useState(true);
    const [compartilharDados, setCompartilharDados] = useState(false);
    const [usoDados, setUsoDados] = useState(true);

    const confirmarExclusao = () => {
        Alert.alert(
            'Excluir conta',
            'A exclusão da conta ainda não está integrada ao servidor. Deseja continuar?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Entendi',
                    style: 'default',
                },
            ]
        );
    };

    const alterarSenha = () => {
        Alert.alert(
            'Alterar senha',
            'A alteração de senha será disponibilizada em uma próxima atualização.'
        );
    };

    const renderOpcao = (
        titulo,
        descricao,
        valor,
        alterar
    ) => (
        <View style={styles.option}>
            <View style={styles.optionInfo}>
                <Text style={styles.optionTitle}>{titulo}</Text>
                <Text style={styles.optionDescription}>
                    {descricao}
                </Text>
            </View>

            <Switch
                value={valor}
                onValueChange={alterar}
                trackColor={{
                    false: '#D8D2DF',
                    true: '#B99BD8',
                }}
                thumbColor={valor ? '#7040A5' : '#F4F4F4'}
            />
        </View>
    );

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
                    <TouchableOpacity
                        onPress={() => router.back()}
                        style={styles.backButton}
                    >
                        <Ionicons
                            name="arrow-back"
                            size={23}
                            color="#7040A5"
                        />
                    </TouchableOpacity>

                    <View style={styles.headerText}>
                        <Text style={styles.title}>
                            Privacidade e segurança
                        </Text>
                        <Text style={styles.subtitle}>
                            Controle suas informações
                        </Text>
                    </View>
                </View>

                {/* INFORMAÇÕES */}
                <View style={styles.infoCard}>
                    <Ionicons
                        name="shield-checkmark"
                        size={30}
                        color="#7040A5"
                    />

                    <View style={styles.infoText}>
                        <Text style={styles.infoTitle}>
                            Sua privacidade importa
                        </Text>

                        <Text style={styles.infoDescription}>
                            Você pode configurar como suas informações
                            são utilizadas no BMap.
                        </Text>
                    </View>
                </View>

                {/* LOCALIZAÇÃO */}
                <Text style={styles.sectionTitle}>
                    Compartilhamento de informações
                </Text>

                <View style={styles.card}>
                    {renderOpcao(
                        'Localização',
                        'Permitir o uso da localização para encontrar locais acessíveis.',
                        compartilharLocalizacao,
                        setCompartilharLocalizacao
                    )}

                    <View style={styles.divider} />

                    {renderOpcao(
                        'Compartilhamento de dados',
                        'Permitir o compartilhamento de informações para melhorias do aplicativo.',
                        compartilharDados,
                        setCompartilharDados
                    )}

                    <View style={styles.divider} />

                    {renderOpcao(
                        'Dados de utilização',
                        'Permitir o uso de dados anônimos para melhorar o BMap.',
                        usoDados,
                        setUsoDados
                    )}
                </View>

                {/* SEGURANÇA */}
                <Text style={styles.sectionTitle}>
                    Segurança da conta
                </Text>

                <View style={styles.card}>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={alterarSenha}
                    >
                        <View style={styles.actionIcon}>
                            <Ionicons
                                name="lock-closed-outline"
                                size={22}
                                color="#7040A5"
                            />
                        </View>

                        <View style={styles.actionInfo}>
                            <Text style={styles.actionTitle}>
                                Alterar senha
                            </Text>
                            <Text style={styles.actionDescription}>
                                Atualize sua senha de acesso
                            </Text>
                        </View>

                        <Ionicons
                            name="chevron-forward"
                            size={20}
                            color="#AAA2B2"
                        />
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    <TouchableOpacity
                        style={styles.action}
                        onPress={() => router.push('/(tabs)/meus-dados')}
                    >
                        <View style={styles.actionIcon}>
                            <Ionicons
                                name="document-text-outline"
                                size={22}
                                color="#7040A5"
                            />
                        </View>

                        <View style={styles.actionInfo}>
                            <Text style={styles.actionTitle}>
                                Consultar meus dados
                            </Text>
                            <Text style={styles.actionDescription}>
                                Visualize suas informações pessoais
                            </Text>
                        </View>

                        <Ionicons
                            name="chevron-forward"
                            size={20}
                            color="#AAA2B2"
                        />
                    </TouchableOpacity>
                </View>

                {/* EXCLUSÃO */}
                <Text style={styles.sectionTitle}>
                    Zona de atenção
                </Text>

                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={confirmarExclusao}
                >
                    <Ionicons
                        name="trash-outline"
                        size={22}
                        color="#D94C75"
                    />

                    <View style={styles.deleteInfo}>
                        <Text style={styles.deleteTitle}>
                            Excluir minha conta
                        </Text>

                        <Text style={styles.deleteDescription}>
                            Solicitar a exclusão da sua conta e informações
                        </Text>
                    </View>

                    <Ionicons
                        name="chevron-forward"
                        size={20}
                        color="#D94C75"
                    />
                </TouchableOpacity>

                <Text style={styles.footer}>
                    BMap • Sua acessibilidade em primeiro lugar 💜
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
        alignItems: 'center',
        marginBottom: 25,
    },

    backButton: {
        width: 42,
        height: 42,
        borderRadius: 13,
        backgroundColor: '#EFE8F8',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },

    headerText: {
        flex: 1,
    },

    title: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#30243D',
    },

    subtitle: {
        fontSize: 12,
        color: '#89818F',
        marginTop: 4,
    },

    infoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFE8F8',
        borderRadius: 17,
        padding: 18,
        marginBottom: 27,
    },

    infoText: {
        flex: 1,
        marginLeft: 13,
    },

    infoTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#7040A5',
    },

    infoDescription: {
        fontSize: 11,
        color: '#665A72',
        lineHeight: 17,
        marginTop: 5,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#30243D',
        marginBottom: 13,
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 17,
        paddingHorizontal: 16,
        marginBottom: 27,
        elevation: 2,
    },

    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 17,
    },

    optionInfo: {
        flex: 1,
        paddingRight: 12,
    },

    optionTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#30243D',
    },

    optionDescription: {
        fontSize: 10,
        color: '#89818F',
        lineHeight: 15,
        marginTop: 5,
    },

    divider: {
        height: 1,
        backgroundColor: '#F0ECF4',
    },

    action: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
    },

    actionIcon: {
        width: 42,
        height: 42,
        borderRadius: 13,
        backgroundColor: '#F3EEF8',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },

    actionInfo: {
        flex: 1,
    },

    actionTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#30243D',
    },

    actionDescription: {
        fontSize: 10,
        color: '#89818F',
        marginTop: 4,
    },

    deleteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 17,
        padding: 16,
        elevation: 2,
    },

    deleteInfo: {
        flex: 1,
        marginLeft: 12,
    },

    deleteTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#D94C75',
    },

    deleteDescription: {
        fontSize: 10,
        color: '#89818F',
        marginTop: 4,
    },

    footer: {
        textAlign: 'center',
        fontSize: 11,
        color: '#A49BAE',
        marginTop: 28,
    },
});
