import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { style } from './style'; 
import Logo from '../../assets/logo.png'; 
import { themas } from "../../global/themes"; 

const LoginScreen = () => {
    const [email, setEmail] = useState(''); // Estado para o email
    const [password, setPassword] = useState(''); // Estado para a senha

    function getLogin() {
        try {
            // Verifica se os campos obrigatórios estão preenchidos
            if (email || password) {
                return Alert.alert('Informe os campos obrigatórios');
            }   

            // Verifica as credenciais
            if (email === 'emilybiecoski@hotmail.com' && password === '123456') {
                Alert.alert('Logado com sucesso');
                // Aqui você pode adicionar a navegação para a próxima tela ou outra ação
            } else {
                Alert.alert('Usuário incorreto');
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
                        onChangeText={(e)=>setEmail(e)}
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
                        onChangeText={(e)=>setPassword(e)}
                    />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={ (getLogin)}> 
                    
                    <Text style={style.textButton}>Acessar</Text>
                </TouchableOpacity>
            
            </View>
            <Text style={style.textBottom}>
                Não tem uma conta? 
                <Text style={{ color: themas.colors.primary }}> Criar conta</Text>
            </Text>
        </View>
    );
};