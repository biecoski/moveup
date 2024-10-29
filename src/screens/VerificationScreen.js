// src/screens/VerificationScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { style } from '../pages/login/style'; // Importe seu estilo aqui
import { themas } from '../global/themes'; 
import { useNavigation, useRoute } from '@react-navigation/native'; 

const VerificationScreen = () => {
    const [verificationCode, setVerificationCode] = useState(''); // Código de verificação
    const [agreeTerms, setAgreeTerms] = useState(false); // Estado para aceitar os termos
    const navigation = useNavigation(); 
    const route = useRoute(); 
    const { email } = route.params; 

    const handleVerification = () => {
        if (verificationCode === '123456' && agreeTerms) { // Verificar se o código e termos estão corretos
            Alert.alert('Código verificado com sucesso!');
            navigation.navigate('Login'); 
        } else {
            Alert.alert('Código inválido ou termos não aceitos.');
        }
    };

    return (
        <View style={style.container}>
            <Text style={style.titleInput}>Código de Verificação</Text>
            <TextInput
                style={[style.input, { backgroundColor: themas.colors.inputBackground }]}
                placeholder="Digite o código que você recebeu"
                placeholderTextColor="grey"
                value={verificationCode}
                onChangeText={setVerificationCode}
            />

            <View style={styles.termsContainer}>
                <TouchableOpacity onPress={() => setAgreeTerms(!agreeTerms)}>
                    <View style={[styles.checkbox, agreeTerms && styles.checkedCheckbox]} />
                </TouchableOpacity>
                <Text style={styles.termsText}>
                    Eu concordo com{' '}
                    <Text style={styles.linkText}>termos</Text> e <Text style={styles.linkText}>privacidade</Text>
                </Text>
            </View>

            <TouchableOpacity style={style.button} onPress={handleVerification}>
                <Text style={style.textButton}>Verificar Código</Text>
            </TouchableOpacity>

            {/* Ícones das redes sociais */}
            <View style={styles.socialIconsContainer}>
                <Image source={require('../assets/facebook.png')} style={styles.icon} />
                <Image source={require('../assets/google.png')} style={styles.icon} />
                <Image source={require('../assets/linkedin.png')} style={styles.icon} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    checkbox: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderColor: themas.colors.primary,
        borderRadius: 3,
        marginRight: 10,
    },
    checkedCheckbox: {
        backgroundColor: themas.colors.primary,
    },
    termsText: {
        color: 'black',
    },
    linkText: {
        color: themas.colors.primary,
        textDecorationLine: 'underline',
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
});

export default VerificationScreen;
