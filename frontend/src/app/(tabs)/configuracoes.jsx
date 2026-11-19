
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

export default function Configuracoes() {
    const [notificacoes, setNotificacoes] = useState(true);
    const [sons, setSons] = useState(true);
    const [vibracao, setVibracao] = useState(true);

    const voltar = () => router.back();

    const ItemAlternancia = ({ titulo, descricao, valor, alterar, icone }) => (
        <View style={styles.item}>
            <View style={styles.itemIcon}>
                <Ionicons name={icone} size={22} color="#7040A5" />
            </View>

            <View style={styles.itemInfo}>
                <Text style={styles.itemTitulo}>{titulo}</Text>
                <Text style={styles.itemDescricao}>{descricao}</Text>
            </View>

            <Switch
                value={valor}
                onValueChange={alterar}
                trackColor={{ false: '#D8D3DE', true: '#B99AD8' }}
                thumbColor={valor ? '#7040A5' : '#F4F3F5'}
            />
        </View>
    );

    const ItemNavegacao = ({ titulo, descricao, icone, destino }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => router.push(destino)}
        >
            <View style={styles.itemIcon}>
                <Ionicons name={icone} size={22} color="#7040A5" />
            </View>

            <View style={styles.itemInfo}>
                <Text style={styles.itemTitulo}>{titulo}</Text>
                <Text style={styles.itemDescricao}>{descricao}</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#AAA2B2" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#F8F6FC" barStyle="dark-content" />

            <View style={styles.header}>
                <TouchableOpacity onPress={voltar} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={23} color="#7040A5" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Configurações</Text>

                <View style={{ width: 42 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.intro}>
                    Personalize sua experiência no BMap.
                </Text>

                <Text style={styles.sectionTitle}>Preferências gerais</Text>

                <View style={styles.card}>
                    <ItemAlternancia
                        titulo="Notificações"
                        descricao="Receber avisos do aplicativo"
                        icone="notifications-outline"
                        valor={notificacoes}
                        alterar={setNotificacoes}
                    />

                    <View style={styles.divider} />

                    <ItemAlternancia
                        titulo="Sons"
                        descricao="Ativar sons de interação"
                        icone="volume-high-outline"
                        valor={sons}
                        alterar={setSons}
                    />

                    <View style={styles.divider} />

                    <ItemAlternancia
                        titulo="Vibração"
                        descricao="Ativar retorno tátil"
                        icone="phone-portrait-outline"
                        valor={vibracao}
                        alterar={setVibracao}
                    />
                </View>

                <Text style={styles.sectionTitle}>Personalização</Text>

                <View style={styles.card}>
                    <ItemNavegacao
                        titulo="Acessibilidade"
                        descricao="Ajuste recursos de acessibilidade"
                        icone="accessibility-outline"
                        destino="/(tabs)/acessibilidade"
                    />

                    <View style={styles.divider} />

                    <ItemNavegacao
                        titulo="Privacidade e segurança"
                        descricao="Gerencie sua segurança"
                        icone="shield-checkmark-outline"
                        destino="/(tabs)/privacidade"
                    />
                </View>

                <View style={styles.infoBox}>
                    <Ionicons
                        name="information-circle-outline"
                        size={21}
                        color="#7040A5"
                    />
                    <Text style={styles.infoText}>
                        As alterações desta tela são temporárias nesta versão
                        demonstrativa e ainda não ficam salvas após fechar o app.
                    </Text>
                </View>

                <Text style={styles.version}>BMap • Versão 1.0.0</Text>
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
        paddingVertical: 17,
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
    itemTitulo: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#30243D',
    },
    itemDescricao: {
        fontSize: 10,
        color: '#89818F',
        marginTop: 4,
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
        marginBottom: 20,
        gap: 10,
    },
    infoText: {
        flex: 1,
        fontSize: 11,
        lineHeight: 17,
        color: '#5F4A75',
    },
    version: {
        textAlign: 'center',
        color: '#AAA2B2',
        fontSize: 10,
        marginBottom: 30,
    },
});
