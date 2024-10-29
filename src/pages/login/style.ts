import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const style =StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#000000',

    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        fontSize:50,
        backgroundColor:'#000000',
        alignItems:"center",
        justifyContent:"center",
        

    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        backgroundColor:'#000000',
        paddingHorizontal:37

    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor:'#000000',
        alignItems:'center',
        justifyContent:'center'

    },
    logo:{
        width:150,
        height:150
    },
    Text: {
            fontFamily: 'Montserrat',
        marginTop: 0,
        fontSize: 23,
        color:themas.colors.lightgray
    },
    titleInput: {
        marginLeft: 5,
        marginTop:15,
        color: themas.colors.lightgray, 
    },
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        flexDirection: 'row',
        borderColor: '#8C08EB',  // Cor roxa (purple) para o contorno
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        color: '#FFF',  // Texto dentro da caixa ficará branco
        fontSize: 16,   
    },
    button:{
        width:290,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.colors.primary,
        marginBottom:200,
        borderRadius: 8,
    },
    textButton:{
        fontSize:16,
        color:'#FFFF',
        fontFamily:'Montserrat',
    },
    textBottom:{
        width:240,
        backgroundColor:'#000000',
        fontFamily:'Montserrat',
        fontSize:16,
        color:themas.colors.lightgray
        
    },
    accountContainer: {
        flexDirection: 'row',        // Alinha os textos horizontalmente
        alignItems: 'center',        // Centraliza verticalmente
        marginTop:30,               // Espaço entre o botão e o texto
 
    },createAccountText: {
        color: themas.colors.primary,
        marginLeft: 4, // Espaço pequeno entre os textos
    },
    
});
