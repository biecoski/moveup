import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { style } from '../pages/login/style'; 
import Logo from '../../assets/logo.png'; 
import { themas } from "../global/themes"; 
import { useNavigation } from '@react-navigation/native'; 

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); 

    const getLogin = () => {
        if (!email || !password) {
            console.log('Informe os campos obrigatórios');
            return;
        }   

        if (email === 'emilybiecoski@hotmail.com' && password === '123456') {
            console.log('Logado com sucesso');
            
        } else {
            console.log('Usuário incorreto');
        }
    };

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain" />
                <Text style={style.Text}>Acessar o Move Up</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>E-mail ou Username</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        placeholder="Username"
                        placeholderTextColor="grey"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <Text style={style.titleInput}>Senha</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        placeholder="Digite sua senha"
                        placeholderTextColor="grey"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                
            </View>

            
            <TouchableOpacity onPress={() => Alert.alert('Redirecionando para recuperação de senha')}>
    <Text style={style.forgotPasswordText}>Esqueceu sua senha?</Text>
</TouchableOpacity>

            

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin}> 
                    <Text style={style.textButton}>Acessar</Text>
                </TouchableOpacity>
            </View>

<TouchableOpacity 
    style={[style.button, { backgroundColor: themas.colors.secundary, marginTop: 50 }]} 
    onPress={() => navigation.navigate('Register')}
>
    <Text style={[style.textButton, { color: 'white', fontWeight: '' }]}>
        Não tem uma conta?{' '}
        <Text style={{ color: '#8C08EB', fontWeight: 'Montserrat', textDecorationLine: 'underline' }}>Criar Conta</Text>
    </Text>
</TouchableOpacity>
        </View>
    );
};

export default LoginScreen;


