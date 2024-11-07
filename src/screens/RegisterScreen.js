import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, ScrollView } from 'react-native';
import { themas } from '../global/themes';

const RegisterScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false); 

    const handleRegister = () => {
        if (!fullName || !email || !verificationCode || !password) {
            Alert.alert('Por favor, preencha todos os campos.');
            return;
        }
        if (!agreeTerms) {
            Alert.alert('Você deve concordar com os termos e condições.');
            return;
        }
        Alert.alert('Conta criada com sucesso!');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Image source={require('../assets/logo.png')} style={styles.logo} />
            
            <Text style={styles.title}>Faça sua conta!</Text>

            <View style={{ marginBottom: 10 }}>
        <Text style={styles.fieldTitle}>NOME COMPLETO</Text>
        <InputField
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        value={fullName}
        onChangeText={setFullName}/></View>


            
        <Text style={styles.fieldTitle}>DIGITE SEU EMAIL</Text>
        <InputField
        label="E-mail"
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}  />

            <Text style={styles.fieldTitle}>DIGITE SUA SENHA</Text>
            <InputField
                label="Senha"
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            
            <TermsAndConditions 
                agreeTerms={agreeTerms}
                setAgreeTerms={setAgreeTerms}
            />

            <View style={styles.lineContainer}>
                <View style={styles.line}></View>
                <Text style={styles.orText}>ou</Text>
                <View style={styles.line}></View>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Inscrever-se</Text>
            </TouchableOpacity>

            <SocialIcons />

            <View style={styles.accessTextContainer}>
    <Text style={styles.accessText}>
        Já tem uma conta? 
        <Text style={styles.linkText}> Acessar</Text>
    </Text>
</View>

        </ScrollView>
    );
};

const InputField = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="grey"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry || false} 
                />
            </View>
        </>
    );
};

const TermsAndConditions = ({ agreeTerms, setAgreeTerms }) => {
    return (
        <View style={styles.termsContainer}>
            <TouchableOpacity onPress={() => setAgreeTerms(!agreeTerms)}>
                <View style={[styles.checkbox, agreeTerms && styles.checkedCheckbox]} />
            </TouchableOpacity>
            <Text style={styles.termsText}>
                Eu concordo com{' '}
                <Text style={styles.linkText}>termos</Text> e <Text style={styles.linkText}>privacidade</Text>.
            </Text>
        </View>
    );
};

const SocialIcons = () => {
    return (
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
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#000000',
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        alignSelf: 'center',  
        marginBottom: 5,    
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Montserrat',
        marginBottom: 20,
        textAlign: 'center',

        
    },
    label: {
        fontSize:25,
        marginBottom: 5,
        color: themas.colors.textPrimary,
    },
    inputBox: {
        borderColor: '#8C08EB',  
        borderWidth: 2,        
        borderRadius: 5,       
        marginBottom: 10,         
        marginTop: -20, 
        backgroundColor: themas.colors.inputBackground,
    },
    input: {
        height: 50,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#fff',
    },
    button: {
        backgroundColor: themas.colors.primary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },


    fieldTitle:{
        color:'#fff',
        fontSize:12,
        fontWeight:'bold',
        marginBottom:-5,
        marginLeft:5,
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
        color: 'white',
    },
    linkText: {
        color: themas.colors.primary,
        textDecorationLine: 'underline',
    },
    socialIconsContainer: {
        flexDirection: 'row',  
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 20,  
        marginBottom: 20,  
    },
    icon: {
        width: 40,
        height: 40,
        marginHorizontal: 20,
        marginTop: 5, 
        marginBottom: 20,  
        resizeMode: 'contain',
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',//linha
        justifyContent: 'center',
        marginVertical: 5,
    },
    line: {
        height: 1,
        flex: 1,
        backgroundColor: 'white', // Cor da linha do OU
    },
    orText: {
        color: 'white',
        marginHorizontal: 5,
        fontSize: 12,
        fontWeight: 'bold',
    },
    accessTextContainer: {

        alignItems: 'center',
        marginTop: -20,
        marginBottom: 80,
    },
    accessText: {
        color: 'white',
        fontSize: 15,
        textAlign:'center'
    },
    linkText: {
        color: '#8C08EB',
        textDecorationLine: 'underline',
        
    },
});

export default RegisterScreen;
