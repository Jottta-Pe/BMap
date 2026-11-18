
import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView,
    StyleSheet,
} from 'react-native';

export default function Libras() {
    const [mensagem, setMensagem] = useState('');

    const frases = [
        'Olá, tudo bem?',
        'Preciso de ajuda.',
        'Onde fica o banheiro?',
        'Obrigado!',
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.logo}>BMap Connect</Text>
            <Text style={styles.subtitle}>
                Comunicação acessível para todos
            </Text>

            <View style={styles.translation}>
                <Text style={styles.sectionTitle}>Tradução para Libras</Text>

                <View style={styles.videoArea}>
                    <Text style={styles.videoIcon}>🤟</Text>
                    <Text style={styles.videoText}>
                        Área de tradução em Libras
                    </Text>
                    <Text style={styles.videoSubtitle}>
                        O intérprete virtual será integrado aqui
                    </Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Digite uma mensagem..."
                    placeholderTextColor="#888"
                    value={mensagem}
                    onChangeText={setMensagem}
                />

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Traduzir mensagem</Text>
                </Pressable>
            </View>

            <Text style={styles.sectionTitle}>Frases rápidas</Text>

            {frases.map((frase, index) => (
                <Pressable
                    key={index}
                    style={styles.phrase}
                    onPress={() => setMensagem(frase)}
                >
                    <Text style={styles.phraseText}>{frase}</Text>
                    <Text style={styles.arrow}>›</Text>
                </Pressable>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
        paddingTop: 55,
    },
    logo: {
        color: '#7040A5',
        fontSize: 28,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#777',
        marginTop: 5,
        marginBottom: 25,
    },
    translation: {
        backgroundColor: '#F3EFF8',
        padding: 16,
        borderRadius: 16,
    },
    sectionTitle: {
        color: '#7040A5',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    videoArea: {
        height: 190,
        backgroundColor: '#E5D9F0',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    videoIcon: {
        fontSize: 45,
    },
    videoText: {
        color: '#7040A5',
        fontWeight: 'bold',
        marginTop: 10,
    },
    videoSubtitle: {
        color: '#777',
        fontSize: 11,
        marginTop: 5,
    },
    input: {
        backgroundColor: '#FFFFFF',
        padding: 14,
        borderRadius: 10,
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#7040A5',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    phrase: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 17,
        backgroundColor: '#F7F5F9',
        borderRadius: 10,
        marginBottom: 10,
    },
    phraseText: {
        color: '#444',
    },
    arrow: {
        color: '#7040A5',
        fontSize: 20,
    },
});
