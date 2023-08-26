import { useState } from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import ButtonStyle from "./ButtonStyle";

const LoginPage = () => {
    const [email,onChangeEmail] = useState()
    const [password,onChangePassword] = useState()

    const onPressClearButton = () =>{
    }
    
    const onPressLoginButton = () =>{
    }

    return (
        <SafeAreaView style={{backgroundColor:'#000'}}>
            <View style={styles.body}>
                <Text style={styles.textLogin}>LOGIN</Text>
                <Image source={require('../image/memecat.jpg')} style={styles.image}/>
                <View style={styles.boxInput}>  
                    <Text style={styles.text}>Insert your e-mail</Text>
                    <TextInput
                    style={styles.input}
                    onChangeEmail={onChangeEmail}
                    value={email}
                    />
                </View>

                <View style={styles.boxInput}>
                    <Text style={styles.text}>Insert your password</Text>
                    <TextInput
                    style={styles.input}
                    onChangePassword={onChangePassword}
                    value={password}/>
                </View>
                <View style={styles.boxButton}>
                    <ButtonStyle title="Login" onPress={onPressLoginButton} style={styles.button}/>
                    <ButtonStyle title="Clear" onPress={onPressClearButton} style={styles.button}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body:{
        height:'100%',
        backgroundColor:"#412",
        alignItems:'center',
        justifyContent:'center',
    },
    textLogin:{
        color:'#FFF',
        fontSize:40,
        marginBottom:10,
        textShadowColor: 'rgba(0, 0, 0, 5)',
        textShadowOffset: { width: 2, height: 2 }, // Shadow offset
        textShadowRadius: 5
    },
    image:{
        borderRadius:15,
        marginBottom:10
    },
    input:{
        borderWidth:2,
        borderRadius:10,
        backgroundColor:"#968581",
        height:40,
        width:300,
        padding:10
    },
    boxInput:{
        gap:5,
        marginBottom:10
    },
    text:{
        fontFamily:'Helvetica',
        fontWeight:'bold',
        fontSize:16,
        color:'#fff',
        textShadowColor: 'rgba(0, 0, 0, 5)',
        textShadowOffset: { width: 2, height: 2 }, // Shadow offset
        textShadowRadius: 5
    },
    boxButton:{
        flexDirection:'row',
        gap:30
    }
})

export default LoginPage;