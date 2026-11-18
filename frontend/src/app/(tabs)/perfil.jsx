
import {
    View,
    Text,
    Pressable,
    ScrollView,
    StyleSheet,
} from 'react-native';

export default function Perfil() {
    const opcoes = [
        { id: 1, icon: '👤', nome: 'Editar perfil' },
        { id: 2, icon: '♿', nome: 'Preferências de acessibilidade' },
        { id: 3, icon: '🔔', nome: 'Notificações' },
        { id: 4, icon: '🔒', nome: 'Privacidade e segurança' },
        { id: 5, icon: '❓', nome: 'Ajuda e suporte' },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Meu perfil</Text>

            <View style={styles.profile}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>👤</Text>
                </View>

                <Text style={styles.name}>Usuário BMap</Text>
                <Text style={styles.email}>usuario@email.com</Text>

                <Pressable style={styles.editButton}>
                    <Text style={styles.editText}>Editar informações</Text>
                </Pressable>
            </View>

            <Text style={styles.sectionTitle}>Configurações</Text>

            {opcoes.map((opcao) => (
                <Pressable key={opcao.id} style={styles.option}>
                    <Text style={styles.optionIcon}>{opcao.icon}</Text>
                    <Text style={styles.optionText}>{opcao.nome}</Text>
                    <Text style={styles.arrow}>›</Text>
                </Pressable>
            ))}

            <Pressable style={styles.logout}>
                <Text style={styles.logoutText}>Sair da conta</Text>
            </Pressable>
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
    profile: {
        alignItems: 'center',
        backgroundColor: '#F5F1F9',
        padding: 25,
        borderRadius: 16,
        marginTop: 25,
        marginBottom: 30,
    },
    avatar: {
        width: 85,
        height: 85,
        borderRadius: 45,
        backgroundColor: '#E5D9F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        fontSize: 40,
    },
    name: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 12,
    },
    email: {
        color: '#777',
        marginTop: 5,
    },
    editButton: {
        backgroundColor: '#7040A5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 15,
    },
    editText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    sectionTitle: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F5F9',
        padding: 16,
        borderRadius: 12,
        marginBottom: 10,
    },
    optionIcon: {
        fontSize: 21,
        marginRight: 12,
    },
    optionText: {
        flex: 1,
        color: '#444',
        fontSize: 14,
    },
    arrow: {
        color: '#7040A5',
        fontSize: 23,
    },
    logout: {
        alignItems: 'center',
        padding: 18,
        marginTop: 10,
        marginBottom: 30,
    },
    logoutText: {
        color: '#D64545',
        fontWeight: 'bold',
    },
});

