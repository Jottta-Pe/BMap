
import React from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Map, Camera } from '@maplibre/maplibre-react-native';
import BottomNav from '../components/BottomNav';

export default function Mapa() {
    const aviso = (recurso) => {
        Alert.alert('BMap', `${recurso} será integrado em breve!`);
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

            <View style={styles.searchContainer}>
                <Ionicons name="search" size={22} color="#7040A5" />

                <TextInput
                    style={styles.searchInput}
                    placeholder="Para onde vamos?"
                    placeholderTextColor="#888888"
                />

                <TouchableOpacity onPress={() => aviso('Filtros')}>
                    <Ionicons name="options-outline" size={24} color="#7040A5" />
                </TouchableOpacity>
            </View>

            <View style={styles.map}>
                <Map
                    style={StyleSheet.absoluteFillObject}
                    mapStyle="https://demotiles.maplibre.org/style.json"
                    androidView="texture"
                >
                    <Camera
                        initialViewState={{
                            center: [-46.6333, -23.5505],
                            zoom: 13,
                        }}
                    />
                </Map>

                <TouchableOpacity
                    style={styles.locationButton}
                    onPress={() => aviso('Sua localização')}
                >
                    <Ionicons name="locate" size={24} color="#7040A5" />
                </TouchableOpacity>
            </View>

            <BottomNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        marginTop: 18,
        marginBottom: 12,
        paddingHorizontal: 16,
        height: 55,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#E5DCEF',
        elevation: 3,
        zIndex: 2,
    },

    searchInput: {
        flex: 1,
        marginHorizontal: 12,
        fontSize: 15,
        color: '#333333',
    },

    map: {
        flex: 1,
        backgroundColor: '#EAE8EE',
        overflow: 'hidden',
        position: 'relative',
    },

    locationButton: {
        position: 'absolute',
        right: 20,
        bottom: 25,
        backgroundColor: '#FFFFFF',
        width: 48,
        height: 48,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
});
