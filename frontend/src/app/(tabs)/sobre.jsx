
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Sobre() {
    const recursos = [
        {
            icone: 'map-outline',
            titulo: 'Mapa acessível',
            descricao: 'Localização e descoberta de estabelecimentos.',
        },
        {
            icone: 'heart-outline',
            titulo: 'Favoritos',
            descricao: 'Salve seus locais preferidos.',
        },
        {
            icone: 'hand-left-outline',
            titulo: 'Área de Libras',
            descricao: 'Recursos de apoio à comunicação.',
        },
        {
            icone: 'accessibility-outline',
            titulo: 'Personalização',
            descricao: 'Preferências de acessibilidade.',
        },
    ];

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

                <Text style={styles.headerTitle}>Sobre o BMap</Text>
                <View style={{ width: 42 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.hero}>
                    <View style={styles.logoCircle}>
                        <Ionicons
                            name="accessibility"
                            size={55}
                            color="#FFFFFF"
                        />
                    </View>

                    <Text style={styles.logo}>BMap</Text>
                    <Text style={styles.tagline}>
                        Acessibilidade para todos.
                    </Text>

                    <Text style={styles.version}>Versão 1.0.0</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>
                        Nossa proposta
                    </Text>

                    <Text style={styles.paragraph}>
                        O BMap é uma solução digital desenvolvida para
                        facilitar a identificação e localização de espaços
                        com recursos de acessibilidade.
                    </Text>

                    <Text style={styles.paragraph}>
                        A plataforma busca promover autonomia, inclusão
                        e acesso à informação, ajudando pessoas a
                        identificarem locais mais adequados às suas
                        necessidades.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>
                        Nossa missão
                    </Text>

                    <Text style={styles.paragraph}>
                        Contribuir para uma sociedade mais inclusiva,
                        aproximando pessoas de espaços acessíveis e
                        incentivando a conscientização sobre acessibilidade.
                    </Text>
                </View>

                <Text style={styles.sectionTitle}>
                    Recursos do aplicativo
                </Text>

                <View style={styles.resourceCard}>
                    {recursos.map((item, index) => (
                        <View
                            key={index}
                            style={[
                                styles.resource,
                                index !== recursos.length - 1 &&
                                    styles.resourceBorder,
                            ]}
                        >
                            <View style={styles.resourceIcon}>
                                <Ionicons
                                    name={item.icone}
                                    size={23}
                                    color="#7040A5"
                                />
                            </View>

                            <View style={styles.resourceInfo}>
                                <Text style={styles.resourceTitle}>
                                    {item.titulo}
                                </Text>
                                <Text style={styles.resourceDescription}>
                                    {item.descricao}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.footer}>
                    <Ionicons name="heart" size={19} color="#D94C75" />
                    <Text style={styles.footerText}>
                        Desenvolvido com foco em inclusão e autonomia.
                    </Text>
                </View>

                <Text style={styles.copyright}>
                    BMap © 2026
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
        fontSize: 19,
        fontWeight: 'bold',
        color: '#30243D',
    },
    hero: {
        alignItems: 'center',
        paddingVertical: 30,
    },
    logoCircle: {
        width: 105,
        height: 105,
        borderRadius: 53,
        backgroundColor: '#7040A5',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    logo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#7040A5',
    },
    tagline: {
        fontSize: 13,
        color: '#777080',
        marginTop: 5,
    },
    version: {
        fontSize: 11,
        color: '#AAA2B2',
        marginTop: 12,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 19,
        marginBottom: 20,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#30243D',
        marginBottom: 13,
    },
    paragraph: {
        fontSize: 12,
        lineHeight: 21,
        color: '#777080',
        marginBottom: 10,
    },
    resourceCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        paddingHorizontal: 15,
        elevation: 2,
    },
    resource: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
    },
    resourceBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#F0ECF4',
    },
    resourceIcon: {
        width: 43,
        height: 43,
        borderRadius: 13,
        backgroundColor: '#F3EEF8',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 13,
    },
    resourceInfo: {
        flex: 1,
    },
    resourceTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#30243D',
    },
    resourceDescription: {
        fontSize: 10,
        color: '#89818F',
        marginTop: 4,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginTop: 25,
    },
    footerText: {
        fontSize: 11,
        color: '#777080',
    },
    copyright: {
        textAlign: 'center',
        color: '#AAA2B2',
        fontSize: 10,
        marginTop: 15,
        marginBottom: 30,
    },
});

