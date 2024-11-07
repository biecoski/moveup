import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#000000',
    }, 
    
    
    boxTop: {
        height: Dimensions.get('window').height / 35,
        width: '100%',
        marginTop:40,
        fontSize: 50,
        backgroundColor: '#000000',
        alignItems: "center",
        justifyContent: "center",
    },
    boxMid: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        marginTop:-25,
        backgroundColor: '#000000',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    boxBottom: {
        height: Dimensions.get('window').height / 10,
        width: '100%',
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 120,
        height: 120,
        marginTop:-250,
    },
    Text: {
        fontFamily: 'Montserrat',
        marginTop: 0,
        fontSize: 24,
        color: themas.colors.lightgray
    },
    titleInput: {
        marginLeft: 5,
        marginTop: 15,
        color: themas.colors.lightgray,
    },
    boxInput: {
        width: '100%',
        height: 55,
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 10,
        flexDirection: 'row',
        borderColor: '#8C08EB',  
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor:'#000000',  
    },
    input: {
        flex: 1,
        color: '#FFF',  
        fontSize: 16,
    },
    button: {
        width: 300,
        height: 50,
        alignItems: 'center',
    
        justifyContent: 'center',
        backgroundColor: themas.colors.primary,
        marginBottom:-20, 
        borderRadius: 8,
        alignSelf: 'center',
    },
    textButton: {
        fontSize: 17,
        color: '#FFF',
        marginBottom:-30,
        marginTop:-30,
        fontFamily: 'Montserrat',
    
    
   
    },
    
    textBottom: {
        width: '100%',
        textAlign: 'center',
        marginBottom:10,        
        backgroundColor: '#fff',
        fontFamily: 'Montserrat',
        fontSize: 17,                 
        color: themas.colors.lightgray, 

    },
    accountContainer: {
        flexDirection: 'row', 
        alignItems: 'center',  
        marginTop: 30,         
    },
    createAccountText: {
        color: themas.colors.primary,
        marginLeft: 4,  
        marginBottom:20,
    },
    forgotPasswordText: {
        fontSize: 13,
        color: '#FFF',             
        textAlign: 'left',         
        marginTop: -10,             
        marginRight:230,             
        fontFamily: 'Montserrat',  
    },
    
});
