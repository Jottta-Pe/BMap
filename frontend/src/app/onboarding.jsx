
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function Onboarding() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao BMap!</Text>

            <Text style={styles.description}>
                Descubra lugares, recursos e caminhos acessíveis.
            </Text>

            <Pressable
                style={styles.button}
                onPress={() => router.push('/login')}
            >
                <Text style={styles.buttonText}>Começar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    title: {
        color: '#7040A5',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        color: '#555555',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#7040A5',
        paddingVertical: 15,
        paddingHorizontal: 55,
        borderRadius: 12,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
