import { useState } from "react";
import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Vibration, View } from "react-native";

const LoginPage = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')

    const onPressClearButton = () =>{
        setEmail('')
        setPassword('')
        setErrorEmail('')
        setErrorPassword('')
    }
    
    const onPressLoginButton = () =>{
        const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

        if (emailValid.test(email)) {
            if (!(password.length >= 8)) {
                Vibration.vibrate()
                setErrorEmail('')
                setErrorPassword('Invalid Password')
            }else{
                setErrorEmail('')
                setErrorPassword('')
                //colocar a função para chamar a tela de HOME

            }
        } else {
            if (!(password.length >= 8)) {
                Vibration.vibrate()
                setErrorEmail('Invalid Email')
                setErrorPassword('Invalid Password')
            }else{
                Vibration.vibrate()
                setErrorEmail('Invalid Email')
                setErrorPassword('')
            }
        }
    }

    return (
        <SafeAreaView style={{backgroundColor:'#000'}}>
            <View style={styles.body}>
                <Text style={styles.textLogin}>LOGIN</Text>
                <Image source={require('../image/rickandmorty.png')} style={styles.image}/>
                <View style={styles.boxInput}>  
                    <Text style={styles.text}>Enter your e-mail:    <Text style={{color:"#F00"}}>{errorEmail}</Text></Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    />
                </View>

                <View style={styles.boxInput}>
                    <Text style={styles.text}>Password:    <Text style={{color:"#F00"}}>{errorPassword}</Text></Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    keyboardType="default"
                    secureTextEntry={true}
                    />
                </View>
                <View style={styles.boxButton}>
                    <TouchableOpacity onPress={onPressLoginButton}>
                        <View style={styles.button}>
                            <Text style={styles.textButton}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPressClearButton}>
                        <View style={styles.button}>
                            <Text style={styles.textButton}>Clear</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body:{
        height:'100%',
        backgroundColor:"#4a85a1",
        alignItems:'center',
        justifyContent:'center',
    },
    textLogin:{
        color:'#FFF',
        fontSize:40,
        marginBottom:10,
        textShadowColor: 'rgba(0, 0, 0, 5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5
    },
    image:{
        height:200,
        borderRadius:15,
        marginBottom:10,
        resizeMode:'contain'
    },
    input:{
        borderWidth:2,
        borderRadius:10,
        backgroundColor:"#dcf285",
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
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5
    },
    boxButton:{
        flexDirection:'row',
        gap:30
    },
    button:{
        backgroundColor:'#9ad6d6',
        borderWidth:1,
        borderColor:"#000",
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        width:110,
        height:34
    },
    textButton:{
        fontWeight:'bold',
        fontSize:20,
        color:'#FFF',
        textShadowColor: 'rgba(0, 0, 0, 5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5
    }
})

export default LoginPage;