
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const perguntas = [
    {
        pergunta: 'O que é o BMap?',
        resposta: 'O BMap é uma plataforma que ajuda pessoas a encontrar e conhecer locais com recursos de acessibilidade, promovendo mais autonomia e inclusão.'
    },
    {
        pergunta: 'Como encontrar locais acessíveis?',
        resposta: 'Acesse a tela Mapa para visualizar locais cadastrados. Você também pode consultar os recursos de acessibilidade disponíveis em cada estabelecimento.'
    },
    {
        pergunta: 'Como salvar um local nos favoritos?',
        resposta: 'Ao encontrar um local, utilize a opção de favoritar para facilitar o acesso posteriormente pela tela Favoritos.'
    },
    {
        pergunta: 'Como funciona a área de Libras?',
        resposta: 'A área de Libras foi desenvolvida para apoiar a comunicação. Nesta versão demonstrativa, algumas funcionalidades ainda estão em desenvolvimento.'
    },
    {
        pergunta: 'Posso sugerir um local?',
        resposta: 'A proposta do BMap é permitir a participação da comunidade no cadastro e na avaliação de locais acessíveis. O envio de sugestões será integrado ao sistema.'
    },
];

export default function Ajuda() {
    const [aberta, setAberta] = useState(null);

    const abrirEmail = async () => {
        const url = 'mailto:suporte@bmap.com?subject=Ajuda%20com%20o%20BMap';

        try {
            await Linking.openURL(url);
        } catch {
            alert('Não foi possível abrir o aplicativo de e-mail.');
        }
    };

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

                <Text style={styles.headerTitle}>Ajuda e suporte</Text>
                <View style={{ width: 42 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.hero}>
                    <View style={styles.heroIcon}>
                        <Ionicons
                            name="headset-outline"
                            size={42}
                            color="#7040A5"
                        />
                    </View>

                    <Text style={styles.heroTitle}>
                        Como podemos ajudar?
                    </Text>

                    <Text style={styles.heroSubtitle}>
                        Encontre respostas para suas dúvidas sobre o BMap.
                    </Text>
                </View>

                <Text style={styles.sectionTitle}>
                    Perguntas frequentes
                </Text>

                <View style={styles.faqCard}>
                    {perguntas.map((item, index) => (
                        <View key={index}>
                            <TouchableOpacity
                                style={styles.question}
                                onPress={() =>
                                    setAberta(aberta === index ? null : index)
                                }
                            >
                                <Text style={styles.questionText}>
                                    {item.pergunta}
                                </Text>

                                <Ionicons
                                    name={
                                        aberta === index
                                            ? 'chevron-up'
                                            : 'chevron-down'
                                    }
                                    size={20}
                                    color="#7040A5"
                                />
                            </TouchableOpacity>

                            {aberta === index && (
                                <Text style={styles.answer}>
                                    {item.resposta}
                                </Text>
                            )}

                            {index !== perguntas.length - 1 && (
                                <View style={styles.divider} />
                            )}
                        </View>
                    ))}
                </View>

                <Text style={styles.sectionTitle}>
                    Fale conosco
                </Text>

                <TouchableOpacity
                    style={styles.contactCard}
                    onPress={abrirEmail}
                >
                    <View style={styles.contactIcon}>
                        <Ionicons
                            name="mail-outline"
                            size={24}
                            color="#7040A5"
                        />
                    </View>

                    <View style={styles.contactInfo}>
                        <Text style={styles.contactTitle}>
                            Suporte por e-mail
                        </Text>
                        <Text style={styles.contactDescription}>
                            Entre em contato com nossa equipe
                        </Text>
                    </View>

                    <Ionicons
                        name="open-outline"
                        size={19}
                        color="#AAA2B2"
                    />
                </TouchableOpacity>

                <View style={styles.infoBox}>
                    <Ionicons
                        name="heart-outline"
                        size={21}
                        color="#7040A5"
                    />
                    <Text style={styles.infoText}>
                        O BMap acredita que acessibilidade é um direito
                        de todos. Estamos trabalhando para melhorar
                        continuamente sua experiência.
                    </Text>
                </View>

                <Text style={styles.version}>
                    BMap • Versão 1.0.0
                </Text>
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#30243D',
    },
    hero: {
        alignItems: 'center',
        paddingVertical: 30,
    },
    heroIcon: {
        width: 85,
        height: 85,
        borderRadius: 43,
        backgroundColor: '#EFE8F8',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    heroTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#30243D',
    },
    heroSubtitle: {
        fontSize: 12,
        color: '#89818F',
        textAlign: 'center',
        marginTop: 8,
        lineHeight: 18,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#30243D',
        marginBottom: 12,
        marginTop: 10,
    },
    faqCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        paddingHorizontal: 16,
        marginBottom: 25,
        elevation: 2,
    },
    question: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 17,
    },
    questionText: {
        flex: 1,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#30243D',
        paddingRight: 10,
    },
    answer: {
        fontSize: 11,
        color: '#777080',
        lineHeight: 19,
        paddingBottom: 16,
        paddingRight: 15,
    },
    divider: {
        height: 1,
        backgroundColor: '#F0ECF4',
    },
    contactCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
        marginBottom: 20,
    },
    contactIcon: {
        width: 45,
        height: 45,
        borderRadius: 13,
        backgroundColor: '#F3EEF8',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 13,
    },
    contactInfo: {
        flex: 1,
    },
    contactTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#30243D',
    },
    contactDescription: {
        fontSize: 10,
        color: '#89818F',
        marginTop: 4,
    },
    infoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFE8F8',
        borderRadius: 14,
        padding: 15,
        gap: 10,
        marginBottom: 20,
    },
    infoText: {
        flex: 1,
        fontSize: 10,
        lineHeight: 16,
        color: '#5F4A75',
    },
    version: {
        textAlign: 'center',
        fontSize: 10,
        color: '#AAA2B2',
        marginBottom: 30,
    },
});
