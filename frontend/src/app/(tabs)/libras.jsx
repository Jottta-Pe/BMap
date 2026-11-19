
import React, { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import BottomNav from '../../components/BottomNav';

export default function Libras() {
    const [mensagem, setMensagem] = useState('');
    const [mensagemEnviada, setMensagemEnviada] = useState('');
    const [historico, setHistorico] = useState([]);

    const avisar = (recurso) => {
        Alert.alert(
            'BMap Connect',
            `${recurso} será integrado em breve!`
        );
    };

    const enviarMensagem = () => {
        if (!mensagem.trim()) {
            Alert.alert('Atenção', 'Digite uma mensagem primeiro.');
            return;
        }

        const novaMensagem = mensagem.trim();

        setMensagemEnviada(novaMensagem);
        setHistorico((anterior) => [novaMensagem, ...anterior]);
        setMensagem('');

        Alert.alert(
            'Mensagem recebida!',
            'Sua mensagem foi registrada e está pronta para a integração com a tradução em Libras.'
        );
    };

    const abrirHistorico = () => {
        if (historico.length === 0) {
            Alert.alert('Histórico', 'Você ainda não enviou nenhuma mensagem.');
            return;
        }

        Alert.alert(
            'Histórico de mensagens',
            historico.map((item, index) => `${index + 1}. ${item}`).join('\n\n')
        );
    };

    const abrirFrases = () => {
        const frases = [
            'Olá, tudo bem?',
            'Preciso de ajuda.',
            'Onde fica o banheiro?',
            'Obrigado pela atenção!',
            'Você pode me ajudar?',
        ];

        Alert.alert(
            'Frases rápidas',
            'Escolha uma frase:',
            [
                ...frases.map((frase) => ({
                    text: frase,
                    onPress: () => setMensagem(frase),
                })),
                { text: 'Cancelar', style: 'cancel' },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <View style={styles.header}>
                    <View>
                        <Text style={styles.logo}>BMap Connect</Text>
                        <Text style={styles.subtitle}>
                            Comunicação sem barreiras
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.helpButton}
                        onPress={() => avisar('Ajuda')}
                    >
                        <Ionicons
                            name="help-circle-outline"
                            size={26}
                            color="#7040A5"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.intro}>
                    <Text style={styles.title}>Vamos conversar?</Text>

                    <Text style={styles.description}>
                        Transforme sua fala em comunicação acessível
                        por meio da Língua Brasileira de Sinais.
                    </Text>
                </View>

                <View style={styles.avatarCard}>
                    <View style={styles.avatarCircle}>
                        <Ionicons
                            name="person"
                            size={82}
                            color="#7040A5"
                        />
                    </View>

                    <Text style={styles.avatarTitle}>Avatar de Libras</Text>

                    <Text style={styles.avatarDescription}>
                        Seu intérprete virtual aparecerá aqui
                    </Text>

                    {mensagemEnviada ? (
                        <View style={styles.messageBox}>
                            <Text style={styles.messageLabel}>
                                Última mensagem:
                            </Text>

                            <Text style={styles.messageText}>
                                {mensagemEnviada}
                            </Text>
                        </View>
                    ) : null}

                    <View style={styles.status}>
                        <View style={styles.statusDot} />
                        <Text style={styles.statusText}>
                            {mensagemEnviada
                                ? 'Mensagem registrada'
                                : 'Aguardando mensagem'}
                        </Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>
                    Digite sua mensagem
                </Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Escreva o que deseja comunicar..."
                        placeholderTextColor="#999999"
                        multiline
                        value={mensagem}
                        onChangeText={setMensagem}
                    />

                    <TouchableOpacity
                        onPress={enviarMensagem}
                        style={styles.sendButton}
                    >
                        <Ionicons
                            name="send"
                            size={21}
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.sectionTitle}>
                    Ou fale sua mensagem
                </Text>

                <TouchableOpacity
                    style={styles.micCard}
                    onPress={() => avisar('Reconhecimento de voz')}
                >
                    <View style={styles.micCircle}>
                        <Ionicons
                            name="mic"
                            size={34}
                            color="#FFFFFF"
                        />
                    </View>

                    <View style={styles.micTextContainer}>
                        <Text style={styles.micTitle}>Falar agora</Text>

                        <Text style={styles.micDescription}>
                            Toque para iniciar o reconhecimento de voz
                        </Text>
                    </View>

                    <Ionicons
                        name="chevron-forward"
                        size={22}
                        color="#7040A5"
                    />
                </TouchableOpacity>

                <Text style={styles.sectionTitle}>
                    Recursos de comunicação
                </Text>

                <View style={styles.features}>
                    <TouchableOpacity
                        style={styles.featureCard}
                        onPress={abrirHistorico}
                    >
                        <Ionicons
                            name="time-outline"
                            size={27}
                            color="#7040A5"
                        />

                        <Text style={styles.featureTitle}>Histórico</Text>

                        <Text style={styles.featureDescription}>
                            Mensagens anteriores
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.featureCard}
                        onPress={abrirFrases}
                    >
                        <Ionicons
                            name="chatbubbles-outline"
                            size={27}
                            color="#7040A5"
                        />

                        <Text style={styles.featureTitle}>Frases rápidas</Text>

                        <Text style={styles.featureDescription}>
                            Expressões comuns
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.footer}>
                    BMap — Acessibilidade para todos
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
        marginBottom: 28,
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

    helpButton: {
        width: 43,
        height: 43,
        borderRadius: 14,
        backgroundColor: '#EFE8F8',
        alignItems: 'center',
        justifyContent: 'center',
    },

    intro: {
        marginBottom: 22,
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#30243D',
        marginBottom: 8,
    },

    description: {
        fontSize: 14,
        color: '#77717F',
        lineHeight: 21,
    },

    avatarCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 22,
        padding: 22,
        alignItems: 'center',
        marginBottom: 26,
        elevation: 3,
    },

    avatarCircle: {
        width: 145,
        height: 145,
        borderRadius: 73,
        backgroundColor: '#EFE8F8',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },

    avatarTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#30243D',
    },

    avatarDescription: {
        fontSize: 12,
        color: '#88818F',
        marginTop: 5,
        textAlign: 'center',
    },

    messageBox: {
        width: '100%',
        backgroundColor: '#F8F6FC',
        padding: 12,
        borderRadius: 12,
        marginTop: 15,
    },

    messageLabel: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#7040A5',
        marginBottom: 5,
    },

    messageText: {
        fontSize: 13,
        color: '#30243D',
        lineHeight: 19,
    },

    status: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F8F1',
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 20,
        marginTop: 16,
    },

    statusDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#48A868',
        marginRight: 7,
    },

    statusText: {
        fontSize: 11,
        color: '#48835B',
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#30243D',
        marginBottom: 12,
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E5DCEF',
        padding: 10,
        marginBottom: 25,
        elevation: 2,
    },

    input: {
        flex: 1,
        minHeight: 65,
        maxHeight: 110,
        fontSize: 14,
        color: '#333333',
        textAlignVertical: 'top',
        padding: 8,
    },

    sendButton: {
        width: 43,
        height: 43,
        borderRadius: 13,
        backgroundColor: '#7040A5',
        alignItems: 'center',
        justifyContent: 'center',
    },

    micCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 17,
        padding: 15,
        marginBottom: 26,
        elevation: 2,
    },

    micCircle: {
        width: 55,
        height: 55,
        borderRadius: 18,
        backgroundColor: '#7040A5',
        alignItems: 'center',
        justifyContent: 'center',
    },

    micTextContainer: {
        flex: 1,
        marginLeft: 13,
        marginRight: 8,
    },

    micTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#30243D',
    },

    micDescription: {
        fontSize: 11,
        color: '#88818F',
        marginTop: 4,
        lineHeight: 16,
    },

    features: {
        flexDirection: 'row',
        gap: 12,
    },

    featureCard: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 17,
        padding: 15,
        minHeight: 125,
        elevation: 2,
    },

    featureTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#30243D',
        marginTop: 12,
    },

    featureDescription: {
        fontSize: 11,
        color: '#88818F',
        marginTop: 4,
    },

    footer: {
        textAlign: 'center',
        fontSize: 11,
        color: '#A49BAE',
        marginTop: 28,
    },
});
