
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#7040A5',
                tabBarInactiveTintColor: '#999999',
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    height: 70,
                    paddingTop: 8,
                    paddingBottom: 10,
                    borderTopColor: '#EEEEEE',
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '600',
                },
            }}
        >
            <Tabs.Screen
                name="mapa"
                options={{
                    title: 'Mapa',
                    tabBarIcon: ({ color }) => (
                        <Text style={{ color, fontSize: 21 }}>⌖</Text>
                    ),
                }}
            />

            <Tabs.Screen
                name="libras"
                options={{
                    title: 'Libras',
                    tabBarIcon: ({ color }) => (
                        <Text style={{ color, fontSize: 21 }}>🤟</Text>
                    ),
                }}
            />

            <Tabs.Screen
                name="favoritos"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) => (
                        <Text style={{ color, fontSize: 21 }}>♥</Text>
                    ),
                }}
            />

            <Tabs.Screen
                name="perfil"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => (
                        <Text style={{ color, fontSize: 21 }}>●</Text>
                    ),
                }}
            />
        </Tabs>
    );
}
