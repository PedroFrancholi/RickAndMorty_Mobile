import { useState } from "react";
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Vibration, View } from "react-native";

const LoginPage = ({navigation}) => {
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
        const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(emailValid.test(email)) {
            if ((password.length) < 8) {
                Vibration.vibrate()
                setErrorEmail('')
                setErrorPassword('Invalid Password')
            }else{
                setErrorEmail('')
                setErrorPassword('')
                navigation.navigate('Home')
            }
        } else {
            if ((password.length) < 8) {
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
        <SafeAreaView style={{backgroundColor:'#24414f'}}>
            <View style={styles.body}>
                
                <Text style={styles.textLogin}>
                    <Text style={{color:'#64dded'}}>RICKY</Text>
                    <Text style={{color:'#e8387e'}}> & </Text>
                    <Text style={{color:'#dcf285'}}>MORTY</Text></Text>
                <Image source={require('../image/rickandmorty.png')} style={styles.image}/>
                <View style={styles.boxInput}>  
                    <Text style={styles.text}>Enter your e-mail:    <Text style={styles.textError}>{errorEmail}</Text></Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    />
                </View>

                <View style={styles.boxInput}>
                    <Text style={styles.text}>Password:    <Text style={styles.textError}>{errorPassword}</Text></Text>
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
                        <View style={styles.buttonLogin}>
                            <Text style={styles.textButtonLogin}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <View style={styles.buttonRegister}>
                            <Text style={styles.textButtonRegister}>Register</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                    <TouchableOpacity onPress={onPressClearButton}>
                        <View style={styles.buttonClear}>
                            <Text style={styles.textButtonClear}>Clear</Text>
                        </View>
                    </TouchableOpacity>
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
    textError:{
        color:'#F00',
        fontSize:12,
        textShadowColor: 'rgba(255, 255, 255, 0.3)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 5
    },
    textLogin:{
        color:'#FFF',
        fontSize:40,
        marginBottom:10,
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
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
        borderColor:'#24414f',
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
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1.5, height: 1.5 },
        textShadowRadius: 5
    },
    boxButton:{
        flexDirection:'row',
        gap:30
    },
    buttonLogin:{
        backgroundColor:'#24414f',
        borderWidth:1.6,
        borderColor:"#dcf285",
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        width:110,
        height:34
    },
    buttonRegister:{
        backgroundColor:'#e8387e',
        borderWidth:1.6,
        borderColor:"#FFF",
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        width:110,
        height:34,
    },
    buttonClear:{
        backgroundColor:'#9ad6d6',
        borderWidth:1.6,
        borderColor:"#24414f",
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        width:110,
        height:34,
        marginTop:10
    },
    textButtonLogin:{
        fontWeight:'bold',
        fontSize:20,
        color:'#dcf285',
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        textShadowOffset: { width: 1.2, height: 1.2 },
        textShadowRadius: 5,
    },
    textButtonRegister:{
        fontWeight:'bold',
        fontSize:20,
        color:'#FFF',
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        textShadowOffset: { width: 1.2, height: 1.2 },
        textShadowRadius: 5,
    },
    textButtonClear:{
        fontWeight:'bold',
        fontSize:20,
        color:'#24414f',
        textShadowColor: 'rgba(255, 255, 255, 0.6)',
        textShadowOffset: { width: 1.2, height: 1.2 },
        textShadowRadius: 5,
    },
})

export default LoginPage;