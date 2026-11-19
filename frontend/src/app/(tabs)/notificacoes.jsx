
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Notificacoes() {
    const [geral, setGeral] = useState(true);
    const [favoritos, setFavoritos] = useState(true);
    const [novosLocais, setNovosLocais] = useState(true);
    const [atualizacoes, setAtualizacoes] = useState(false);
    const [promocoes, setPromocoes] = useState(false);

    const Item = ({ titulo, descricao, icone, valor, alterar }) => (
        <View style={styles.item}>
            <View style={styles.itemIcon}>
                <Ionicons name={icone} size={22} color="#7040A5" />
            </View>

            <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>{titulo}</Text>
                <Text style={styles.itemDescription}>{descricao}</Text>
            </View>

            <Switch
                value={valor}
                onValueChange={alterar}
                trackColor={{ false: '#D8D3DE', true: '#B99AD8' }}
                thumbColor={valor ? '#7040A5' : '#F4F3F5'}
                disabled={!geral}
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

                <Text style={styles.headerTitle}>Notificações</Text>
                <View style={{ width: 42 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.intro}>
                    Escolha quais notificações deseja receber do BMap.
                </Text>

                <Text style={styles.sectionTitle}>Geral</Text>

                <View style={styles.card}>
                    <Item
                        titulo="Ativar notificações"
                        descricao="Controlar todos os avisos do aplicativo"
                        icone="notifications-outline"
                        valor={geral}
                        alterar={setGeral}
                    />
                </View>

                <Text style={styles.sectionTitle}>Tipos de notificação</Text>

                <View style={styles.card}>
                    <Item
                        titulo="Favoritos"
                        descricao="Atualizações sobre locais salvos"
                        icone="heart-outline"
                        valor={favoritos}
                        alterar={setFavoritos}
                    />

                    <View style={styles.divider} />

                    <Item
                        titulo="Novos locais acessíveis"
                        descricao="Avisos sobre novos locais cadastrados"
                        icone="location-outline"
                        valor={novosLocais}
                        alterar={setNovosLocais}
                    />

                    <View style={styles.divider} />

                    <Item
                        titulo="Atualizações do BMap"
                        descricao="Novidades e melhorias do aplicativo"
                        icone="refresh-outline"
                        valor={atualizacoes}
                        alterar={setAtualizacoes}
                    />

                    <View style={styles.divider} />

                    <Item
                        titulo="Novidades e campanhas"
                        descricao="Informações sobre ações e campanhas"
                        icone="megaphone-outline"
                        valor={promocoes}
                        alterar={setPromocoes}
                    />
                </View>

                <View style={styles.infoBox}>
                    <Ionicons
                        name="information-circle-outline"
                        size={21}
                        color="#7040A5"
                    />
                    <Text style={styles.infoText}>
                        Estas opções controlam suas preferências nesta
                        demonstração. O envio de notificações reais depende
                        da integração com o serviço de notificações.
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
    intro: {
        fontSize: 13,
        color: '#89818F',
        lineHeight: 20,
        marginTop: 12,
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#30243D',
        marginBottom: 12,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        paddingHorizontal: 15,
        marginBottom: 25,
        elevation: 2,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
    },
    itemIcon: {
        width: 42,
        height: 42,
        borderRadius: 13,
        backgroundColor: '#F3EEF8',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    itemInfo: {
        flex: 1,
        paddingRight: 8,
    },
    itemTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#30243D',
    },
    itemDescription: {
        fontSize: 10,
        color: '#89818F',
        marginTop: 4,
        lineHeight: 15,
    },
    divider: {
        height: 1,
        backgroundColor: '#F0ECF4',
    },
    infoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFE8F8',
        borderRadius: 14,
        padding: 15,
        marginBottom: 30,
        gap: 10,
    },
    infoText: {
        flex: 1,
        fontSize: 10,
        lineHeight: 16,
        color: '#5F4A75',
    },
});
