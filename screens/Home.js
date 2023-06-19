import  { useState } from 'react';
import {ImageBackground, View, Text, Image, TouchableOpacity, Modal, FlatList, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppList } from '../components/AppList';
import { AppListItem } from '../components/AppListItem';


export default function Home() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        navigation.navigate('Notes');
    };

    const openAppList = () => {
        setModalVisible(true);
    };

    const closeAppList = () => {
        setModalVisible(false);
    };

    const renderAppItem = ({ item }) => (
        <AppListItem name={item.name} />
    );

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.background}>
                <Image style={styles.logo} source={require('../assets/Notes-icon.png')} />
                <Text style={styles.text}>Write everything down.</Text>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Go to Notes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.otherAppsButton} onPress={openAppList}>
                    <Text style={styles.otherAppsButtonText}>Other Apps</Text>
                </TouchableOpacity>
                <Modal visible={modalVisible} animationType="slide" onRequestClose={closeAppList}>
                    <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.background}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>Other Apps</Text>
                            <FlatList
                                data={AppList}
                                renderItem={renderAppItem}
                                keyExtractor={(item) => item.id.toString()}/>
                            <TouchableOpacity style={styles.closeButton} onPress={closeAppList}>
                                <Text style={styles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </Modal>
            </ImageBackground>
        </View>
    );
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 250,
        height: 250,
        marginLeft: '14%',
        marginTop: '10%',
    },
    text: {
        color: 'black',
        marginLeft: '31%',
        marginTop: '10%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
    otherAppsButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
    },
    otherAppsButtonText: {
        color: 'black',
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'white',
    },
    closeButtonText: {
        color: 'black',
        fontSize: 16,
    },
});
