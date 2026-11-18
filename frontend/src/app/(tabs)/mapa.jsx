
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function Mapa() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>BMap</Text>
                <Text style={styles.subtitle}>Encontre lugares acessíveis</Text>
            </View>

            <TextInput
                style={styles.search}
                placeholder="Buscar local ou endereço..."
                placeholderTextColor="#888"
            />

            <Text style={styles.sectionTitle}>Recursos de acessibilidade</Text>

            <View style={styles.filters}>
                <Pressable style={styles.filter}>
                    <Text style={styles.filterIcon}>♿</Text>
                    <Text style={styles.filterText}>Mobilidade</Text>
                </Pressable>

                <Pressable style={styles.filter}>
                    <Text style={styles.filterIcon}>👁</Text>
                    <Text style={styles.filterText}>Visual</Text>
                </Pressable>

                <Pressable style={styles.filter}>
                    <Text style={styles.filterIcon}>🤟</Text>
                    <Text style={styles.filterText}>Libras</Text>
                </Pressable>
            </View>

            <View style={styles.map}>
                <Text style={styles.mapIcon}>📍</Text>
                <Text style={styles.mapText}>Mapa de locais acessíveis</Text>
                <Text style={styles.mapSubtext}>
                    Área reservada para o mapa interativo
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
        paddingTop: 55,
    },
    header: {
        marginBottom: 20,
    },
    logo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#7040A5',
    },
    subtitle: {
        fontSize: 14,
        color: '#777',
        marginTop: 4,
    },
    search: {
        backgroundColor: '#F3EFF8',
        padding: 16,
        borderRadius: 12,
        fontSize: 15,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 25,
        marginBottom: 12,
    },
    filters: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    filter: {
        flex: 1,
        backgroundColor: '#F3EFF8',
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    filterIcon: {
        fontSize: 25,
    },
    filterText: {
        color: '#7040A5',
        fontSize: 12,
        marginTop: 6,
    },
    map: {
        flex: 1,
        backgroundColor: '#EEE8F5',
        borderRadius: 16,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapIcon: {
        fontSize: 35,
    },
    mapText: {
        color: '#7040A5',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 10,
    },
    mapSubtext: {
        color: '#777',
        fontSize: 12,
        marginTop: 6,
    },
});
