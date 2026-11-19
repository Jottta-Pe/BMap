
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

export default function Acessibilidade() {
    const [altoContraste, setAltoContraste] = useState(false);
    const [textoGrande, setTextoGrande] = useState(false);
    const [negrito, setNegrito] = useState(false);
    const [reducaoMovimento, setReducaoMovimento] = useState(false);
    const [leitorTela, setLeitorTela] = useState(false);
    const [mobilidade, setMobilidade] = useState(false);

    const fundo = altoContraste ? '#000000' : '#F8F6FC';
    const superficie = altoContraste ? '#171717' : '#FFFFFF';
    const texto = altoContraste ? '#FFFFFF' : '#30243D';
    const secundario = altoContraste ? '#E0E0E0' : '#89818F';
    const destaque = altoContraste ? '#FFE66D' : '#7040A5';

    const ItemAlternancia = ({
        titulo,
        descricao,
        icone,
        valor,
        alterar,
    }) => (
        <View style={[styles.item, { backgroundColor: superficie }]}>
            <View style={[
                styles.itemIcon,
                { backgroundColor: altoContraste ? '#333333' : '#F3EEF8' }
            ]}>
                <Ionicons name={icone} size={22} color={destaque} />
            </View>

            <View style={styles.itemInfo}>
                <Text style={[
                    styles.itemTitulo,
                    { color: texto, fontWeight: negrito ? '900' : 'bold' }
                ]}>
                    {titulo}
                </Text>
                <Text style={[styles.itemDescricao, { color: secundario }]}>
                    {descricao}
                </Text>
            </View>

            <Switch
                value={valor}
                onValueChange={alterar}
                trackColor={{ false: '#D8D3DE', true: '#B99AD8' }}
                thumbColor={valor ? destaque : '#F4F3F5'}
            />
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: fundo }]}>
            <StatusBar
                backgroundColor={fundo}
                barStyle={altoContraste ? 'light-content' : 'dark-content'}
            />

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={[
                        styles.backButton,
                        { backgroundColor: superficie }
                    ]}
                >
                    <Ionicons name="arrow-back" size={23} color={destaque} />
                </TouchableOpacity>

                <Text style={[styles.headerTitle, { color: texto }]}>
                    Acessibilidade
                </Text>

                <View style={{ width: 42 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={[styles.intro, { color: secundario }]}>
                    Personalize o BMap para tornar sua experiência mais
                    confortável e acessível.
                </Text>

                <Text style={[styles.sectionTitle, { color: texto }]}>
                    Aparência e leitura
                </Text>

                <View style={styles.card}>
                    <ItemAlternancia
                        titulo="Alto contraste"
                        descricao="Aumenta o contraste entre textos e fundos"
                        icone="contrast-outline"
                        valor={altoContraste}
                        alterar={setAltoContraste}
                    />

                    <View style={styles.divider} />

                    <ItemAlternancia
                        titulo="Texto ampliado"
                        descricao="Aumenta o tamanho dos textos"
                        icone="text-outline"
                        valor={textoGrande}
                        alterar={setTextoGrande}
                    />

                    <View style={styles.divider} />

                    <ItemAlternancia
                        titulo="Texto em negrito"
                        descricao="Facilita a identificação das informações"
                        icone="reader-outline"
                        valor={negrito}
                        alterar={setNegrito}
                    />
                </View>

                <Text style={[styles.sectionTitle, { color: texto }]}>
                    Navegação e interação
                </Text>

                <View style={styles.card}>
                    <ItemAlternancia
                        titulo="Reduzir animações"
                        descricao="Reduz efeitos visuais e movimentos"
                        icone="eye-outline"
                        valor={reducaoMovimento}
                        alterar={setReducaoMovimento}
                    />

                    <View style={styles.divider} />

                    <ItemAlternancia
                        titulo="Compatibilidade com leitor de tela"
                        descricao="Ativa a preferência para uso com leitores de tela"
                        icone="volume-high-outline"
                        valor={leitorTela}
                        alterar={setLeitorTela}
                    />

                    <View style={styles.divider} />

                    <ItemAlternancia
                        titulo="Acesso facilitado"
                        descricao="Prioriza recursos para pessoas com mobilidade reduzida"
                        icone="accessibility-outline"
                        valor={mobilidade}
                        alterar={setMobilidade}
                    />
                </View>

                <Text style={[styles.sectionTitle, { color: texto }]}>
                    Pré-visualização
                </Text>

                <View style={[
                    styles.preview,
                    { backgroundColor: superficie }
                ]}>
                    <Text style={[
                        styles.previewTitle,
                        {
                            color: texto,
                            fontSize: textoGrande ? 22 : 17,
                            fontWeight: negrito ? '900' : 'bold',
                        }
                    ]}>
                        Bem-vindo ao BMap!
                    </Text>

                    <Text style={[
                        styles.previewText,
                        {
                            color: secundario,
                            fontSize: textoGrande ? 17 : 13,
                            fontWeight: negrito ? 'bold' : 'normal',
                        }
                    ]}>
                        Encontre locais acessíveis e explore a cidade
                        com mais autonomia.
                    </Text>

                    <View style={[
                        styles.previewButton,
                        { backgroundColor: destaque }
                    ]}>
                        <Text style={[
                            styles.previewButtonText,
                            { color: altoContraste ? '#000000' : '#FFFFFF' }
                        ]}>
                            Explorar mapa
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={[
                        styles.resetButton,
                        { borderColor: destaque }
                    ]}
                    onPress={() => {
                        setAltoContraste(false);
                        setTextoGrande(false);
                        setNegrito(false);
                        setReducaoMovimento(false);
                        setLeitorTela(false);
                        setMobilidade(false);
                    }}
                >
                    <Ionicons name="refresh-outline" size={19} color={destaque} />
                    <Text style={[styles.resetText, { color: destaque }]}>
                        Restaurar configurações
                    </Text>
                </TouchableOpacity>

                <Text style={[styles.note, { color: secundario }]}>
                    Algumas opções são preferências demonstrativas nesta
                    versão e ainda não alteram os recursos nativos do aparelho.
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    intro: {
        fontSize: 13,
        lineHeight: 20,
        marginTop: 12,
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    card: {
        borderRadius: 18,
        paddingHorizontal: 15,
        marginBottom: 25,
        overflow: 'hidden',
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
    },
    itemDescricao: {
        fontSize: 10,
        marginTop: 4,
        lineHeight: 15,
    },
    divider: {
        height: 1,
        backgroundColor: '#EAE5EF',
    },
    preview: {
        borderRadius: 18,
        padding: 20,
        marginBottom: 20,
    },
    previewTitle: {
        marginBottom: 9,
    },
    previewText: {
        lineHeight: 21,
        marginBottom: 18,
    },
    previewButton: {
        alignSelf: 'flex-start',
        paddingVertical: 11,
        paddingHorizontal: 17,
        borderRadius: 10,
    },
    previewButtonText: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    resetButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 13,
        padding: 14,
        marginBottom: 15,
        gap: 8,
    },
    resetText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    note: {
        fontSize: 10,
        lineHeight: 16,
        textAlign: 'center',
        marginBottom: 30,
    },
});
