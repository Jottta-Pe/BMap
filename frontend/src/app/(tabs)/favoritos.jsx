
import {
    View,
    Text,
    Pressable,
    ScrollView,
    StyleSheet,
} from 'react-native';

const locais = [
    {
        id: 1,
        nome: 'Shopping Morumbi',
        categoria: 'Shopping',
        recurso: 'Acessibilidade e mobilidade',
        icon: '🛍️',
    },
    {
        id: 2,
        nome: 'Parque Ibirapuera',
        categoria: 'Parque',
        recurso: 'Áreas de circulação acessíveis',
        icon: '🌳',
    },
    {
        id: 3,
        nome: 'Biblioteca Mário de Andrade',
        categoria: 'Biblioteca',
        recurso: 'Acessibilidade cultural',
        icon: '📚',
    },
];

export default function Favoritos() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Meus favoritos</Text>
            <Text style={styles.subtitle}>
                Seus lugares acessíveis salvos
            </Text>

            {locais.map((local) => (
                <View key={local.id} style={styles.card}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.icon}>{local.icon}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.name}>{local.nome}</Text>
                        <Text style={styles.category}>{local.categoria}</Text>
                        <Text style={styles.resource}>{local.recurso}</Text>
                    </View>

                    <Pressable>
                        <Text style={styles.heart}>♥</Text>
                    </Pressable>
                </View>
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
    title: {
        color: '#7040A5',
        fontSize: 28,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#777',
        marginTop: 6,
        marginBottom: 25,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F1F9',
        padding: 15,
        borderRadius: 14,
        marginBottom: 15,
    },
    iconContainer: {
        width: 55,
        height: 55,
        backgroundColor: '#E8DDF2',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 27,
    },
    info: {
        flex: 1,
        marginLeft: 12,
    },
    name: {
        color: '#333',
        fontSize: 15,
        fontWeight: 'bold',
    },
    category: {
        color: '#7040A5',
        fontSize: 12,
        marginTop: 3,
    },
    resource: {
        color: '#777',
        fontSize: 11,
        marginTop: 4,
    },
    heart: {
        color: '#7040A5',
        fontSize: 25,
    },
});
