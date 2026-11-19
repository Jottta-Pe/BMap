
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

const locaisIniciais = [
    {
        id: 1,
        nome: 'Shopping Morumbi',
        categoria: 'Compras',
        endereco: 'Av. Roque Petroni Júnior, São Paulo',
        recursos: ['Acesso para cadeira de rodas', 'Elevador'],
        icone: 'cart-outline',
    },
    {
        id: 2,
        nome: 'Parque Ibirapuera',
        categoria: 'Lazer',
        endereco: 'Av. Pedro Álvares Cabral, São Paulo',
        recursos: ['Acesso adaptado', 'Banheiro acessível'],
        icone: 'leaf-outline',
    },
    {
        id: 3,
        nome: 'Biblioteca Mário de Andrade',
        categoria: 'Educação',
        endereco: 'Rua da Consolação, São Paulo',
        recursos: ['Elevador', 'Acessibilidade visual'],
        icone: 'book-outline',
    },
];

export default function Favoritos() {
    const [locais, setLocais] = useState(locaisIniciais);

    const removerFavorito = (id, nome) => {
        Alert.alert(
            'Remover favorito',
            `Deseja remover ${nome} dos seus favoritos?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Remover',
                    style: 'destructive',
                    onPress: () => {
                        setLocais((atuais) =>
                            atuais.filter((local) => local.id !== id)
                        );
                    },
                },
            ]
        );
    };

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
                        <Text style={styles.subtitle}>
                            Seus lugares especiais
                        </Text>
                    </View>

                    <View style={styles.headerIcon}>
                        <Ionicons
                            name="heart"
                            size={25}
                            color="#7040A5"
                        />
                    </View>
                </View>

                {/* TÍTULO */}
                <View style={styles.intro}>
                    <Text style={styles.title}>Meus favoritos</Text>

                    <Text style={styles.description}>
                        Encontre rapidamente os locais acessíveis
                        que você salvou.
                    </Text>
                </View>

                {/* CONTADOR */}
                <View style={styles.counterCard}>
                    <View style={styles.counterIcon}>
                        <Ionicons
                            name="bookmark"
                            size={25}
                            color="#FFFFFF"
                        />
                    </View>

                    <View>
                        <Text style={styles.counterNumber}>
                            {locais.length}
                        </Text>
                        <Text style={styles.counterLabel}>
                            locais salvos
                        </Text>
                    </View>
                </View>

                {/* LISTA */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>
                        Locais salvos
                    </Text>

                    <Text style={styles.sectionCount}>
                        {locais.length} itens
                    </Text>
                </View>

                {locais.length > 0 ? (
                    locais.map((local) => (
                        <View key={local.id} style={styles.localCard}>
                            <View style={styles.cardTop}>
                                <View style={styles.localIcon}>
                                    <Ionicons
                                        name={local.icone}
                                        size={27}
                                        color="#7040A5"
                                    />
                                </View>

                                <View style={styles.localInfo}>
                                    <Text style={styles.category}>
                                        {local.categoria}
                                    </Text>

                                    <Text style={styles.localName}>
                                        {local.nome}
                                    </Text>
                                </View>

                                <TouchableOpacity
                                    style={styles.removeButton}
                                    onPress={() =>
                                        removerFavorito(local.id, local.nome)
                                    }
                                >
                                    <Ionicons
                                        name="heart"
                                        size={23}
                                        color="#D94C75"
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.addressRow}>
                                <Ionicons
                                    name="location-outline"
                                    size={16}
                                    color="#89818F"
                                />

                                <Text style={styles.address}>
                                    {local.endereco}
                                </Text>
                            </View>

                            <View style={styles.divider} />

                            <Text style={styles.resourcesTitle}>
                                Recursos de acessibilidade
                            </Text>

                            {local.recursos.map((recurso, index) => (
                                <View key={index} style={styles.resourceRow}>
                                    <Ionicons
                                        name="checkmark-circle"
                                        size={15}
                                        color="#48A868"
                                    />
                                    <Text style={styles.resourceText}>
                                        {recurso}
                                    </Text>
                                </View>
                            ))}

                            <TouchableOpacity
                                style={styles.detailsButton}
                                onPress={() =>
                                    Alert.alert(
                                        local.nome,
                                        'Os detalhes deste local serão integrados em breve!'
                                    )
                                }
                            >
                                <Text style={styles.detailsText}>
                                    Ver detalhes
                                </Text>

                                <Ionicons
                                    name="arrow-forward"
                                    size={17}
                                    color="#7040A5"
                                />
                            </TouchableOpacity>
                        </View>
                    ))
                ) : (
                    <View style={styles.emptyState}>
                        <Ionicons
                            name="heart-dislike-outline"
                            size={55}
                            color="#B9A9CA"
                        />

                        <Text style={styles.emptyTitle}>
                            Nenhum favorito ainda
                        </Text>

                        <Text style={styles.emptyDescription}>
                            Quando você salvar um local no mapa,
                            ele aparecerá aqui.
                        </Text>
                    </View>
                )}

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

    headerIcon: {
        width: 45,
        height: 45,
        borderRadius: 15,
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

    counterCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#7040A5',
        borderRadius: 19,
        padding: 18,
        marginBottom: 28,
    },

    counterIcon: {
        width: 48,
        height: 48,
        borderRadius: 15,
        backgroundColor: '#8B65B5',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },

    counterNumber: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    counterLabel: {
        fontSize: 12,
        color: '#F0E9F8',
    },

    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
    },

    sectionTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#30243D',
    },

    sectionCount: {
        fontSize: 12,
        color: '#89818F',
    },

    localCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 19,
        padding: 16,
        marginBottom: 15,
        elevation: 2,
    },

    cardTop: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    localIcon: {
        width: 49,
        height: 49,
        borderRadius: 15,
        backgroundColor: '#EFE8F8',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },

    localInfo: {
        flex: 1,
    },

    category: {
        fontSize: 11,
        color: '#8B70A7',
        marginBottom: 3,
    },

    localName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#30243D',
    },

    removeButton: {
        padding: 7,
    },

    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },

    address: {
        flex: 1,
        fontSize: 11,
        color: '#89818F',
        marginLeft: 6,
        lineHeight: 17,
    },

    divider: {
        height: 1,
        backgroundColor: '#F0ECF4',
        marginVertical: 14,
    },

    resourcesTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#51465D',
        marginBottom: 9,
    },

    resourceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },

    resourceText: {
        fontSize: 11,
        color: '#77717F',
        marginLeft: 7,
    },

    detailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3EEF8',
        borderRadius: 12,
        padding: 12,
        marginTop: 12,
    },

    detailsText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#7040A5',
        marginRight: 7,
    },

    emptyState: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        marginTop: 10,
    },

    emptyTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#30243D',
        marginTop: 15,
    },

    emptyDescription: {
        fontSize: 12,
        color: '#89818F',
        textAlign: 'center',
        lineHeight: 19,
        marginTop: 7,
    },

    footer: {
        textAlign: 'center',
        fontSize: 11,
        color: '#A49BAE',
        marginTop: 25,
    },
});
