import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { style } from '../pages/login/style'; 
import Logo from '../../assets/logo.png'; 
import { themas } from "../global/themes"; 
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); // Usar o hook de navegação

    const getLogin = () => {
        if (!email || !password) {
            console.log('Informe os campos obrigatórios');
            return;
        }   

        if (email === 'emilybiecoski@hotmail.com' && password === '123456') {
            console.log('Logado com sucesso');
            // Aqui você pode adicionar a navegação para a próxima tela ou outra ação
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

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin}> 
                    <Text style={style.textButton}>Acessar</Text>
                </TouchableOpacity>
            </View>

            <Text style={style.textBottom}>
                Não tem uma conta? 
                <Text 
                    style={{ color: themas.colors.primary }} 
                    onPress={() => navigation.navigate('Register')} // Navegar para Register
                >
                    Criar conta
                </Text>
            </Text>
        </View>
    );
};

export default LoginScreen;
