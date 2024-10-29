// src/screens/RegisterScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { style } from '../pages/login/style'; 
import { themas } from '../global/themes';

const RegisterScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false); 

    const handleRegister = () => {
        Alert.alert('Conta criada com sucesso!');
    };

    return (
        <View style={style.container}>
            <Text style={style.titleInput}>Nome Completo</Text>
            <TextInput
                style={[style.input, { backgroundColor: themas.colors.inputBackground }]}
                placeholder="Digite seu nome completo"
                placeholderTextColor="grey"
                value={fullName}
                onChangeText={setFullName}
            />

            <Text style={style.titleInput}>E-mail</Text>
            <TextInput
                style={[style.input, { backgroundColor: themas.colors.inputBackground }]}
                placeholder="Digite seu e-mail"
                placeholderTextColor="grey"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={style.titleInput}>Código de Verificação</Text>
            <TextInput
                style={[style.input, { backgroundColor: themas.colors.inputBackground }]}
                placeholder="Digite o código que você recebeu"
                placeholderTextColor="grey"
                value={verificationCode}
                onChangeText={setVerificationCode}
            />

            <Text style={style.titleInput}>Senha</Text>
            <TextInput
                style={[style.input, { backgroundColor: themas.colors.inputBackground }]}
                placeholder="Digite sua senha"
                placeholderTextColor="grey"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
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

            <TouchableOpacity style={style.button} onPress={handleRegister}>
                <Text style={style.textButton}>Criar Conta</Text>
            </TouchableOpacity>

            {/* Ícones das redes sociais */}
            <View style={styles.socialIconsContainer}>
                <TouchableOpacity>
                    <Image source={require('../assets/facebook.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/google.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/linkedin.png')} style={styles.icon} />
                </TouchableOpacity>
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

export default RegisterScreen;
