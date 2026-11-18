
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

export default function BottomNav() {
    const router = useRouter();
    const pathname = usePathname();

    const navegar = (rota) => {
        if (pathname !== rota) {
            router.replace(rota);
        }
    };

    const item = (rota, icone, texto) => {
        const ativo = pathname === rota;

        return (
            <TouchableOpacity
                style={styles.navItem}
                onPress={() => navegar(rota)}
            >
                <Ionicons
                    name={icone}
                    size={23}
                    color={ativo ? '#7040A5' : '#888888'}
                />
                <Text style={ativo ? styles.activeLabel : styles.navLabel}>
                    {texto}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.bottomBar}>
            {item('/mapa', 'map-outline', 'Mapa')}
            {item('/libras', 'hand-left-outline', 'Libras')}

            <TouchableOpacity
                style={styles.micButton}
                onPress={() =>
                    Alert.alert(
                        'BMap',
                        'Assistente de voz será integrado em breve!'
                    )
                }
            >
                <Ionicons name="mic" size={29} color="#FFFFFF" />
            </TouchableOpacity>

            {item('/favoritos', 'heart-outline', 'Favoritos')}
            {item('/perfil', 'person-outline', 'Perfil')}
        </View>
    );
}

const styles = StyleSheet.create({
    bottomBar: {
        height: 78,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
        paddingHorizontal: 5,
    },

    navItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },

    navLabel: {
        fontSize: 9,
        color: '#888888',
    },

    activeLabel: {
        fontSize: 9,
        color: '#7040A5',
        fontWeight: 'bold',
    },

    micButton: {
        width: 62,
        height: 62,
        borderRadius: 31,
        backgroundColor: '#7040A5',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -38,
        borderWidth: 5,
        borderColor: '#FFFFFF',
        elevation: 6,
    },
});
