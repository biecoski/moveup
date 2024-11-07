import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { style } from './style';
import Logo from '../../assets/logo.png';
import { themas } from "../../global/themes";

const LoginScreen = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    function getLogin() {
        try {
            
            if (!email || !password) {
                console.log('Informe os campos obrigatórios');
                return;
            }

            // Verifica as credenciais
            if (email === 'emilybiecoski@hotmail.com' && password === '123456') {
                console.log('Logado com sucesso');
               
            } else {
                console.log('Usuário incorreto');
            }
        } catch (error) {
            console.log(error);
        }
    }

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
                        onChangeText={(e) => setEmail(e)}
                    />
                </View>

                <Text style={style.titleInput}>Senha</Text>
                
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        placeholder="Digite sua senha"
                        placeholderTextColor="grey"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                    />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin}>
                    <Text style={style.textButton}>Acessar</Text>
                </TouchableOpacity>
            </View>
            


        </View>
    );
};

export default LoginScreen;
