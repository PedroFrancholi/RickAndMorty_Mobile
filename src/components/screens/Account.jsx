import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView, TouchableOpacity, View } from "react-native";

const Account = ({navigation}) => {
    return (
    <SafeAreaView style={{backgroundColor:'#24414f'}}>
          <View style={styles.boxGeral}>
            <TouchableOpacity style={styles.boxReturn} onPress={() => navigation.navigate('HomePage')}>
                    <Text style={styles.textTitleReturn}>RETURN</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.boxLogOff} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textTitleLogOff}>LOG OFF</Text>
            </TouchableOpacity>
            </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    boxGeral:{
        flex:0,
        height:'100%',
        backgroundColor:'#4a85a1',
        justifyContent:'center',
        alignItems:'center',
        gap:50
    },
    boxReturn:{
        paddingVertical:20,
        width:200,
        alignItems:'center',
        backgroundColor:'#4a8',
        borderRadius:25,
        borderColor:'#dcf285',
        borderWidth:1.5,
        gap:15
    },
    boxLogOff:{
        paddingVertical:20,
        width:200,
        alignItems:'center',
        backgroundColor:'#e8387e',
        borderRadius:25,
        borderColor:'#FFF',
        borderWidth:1.5,
        gap:15
    },
    textTitleReturn:{
        color:'#dcf285',
        fontWeight:'bold',
        fontSize:26,
        textShadowColor: 'rgba(36, 65, 79, 0.8)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5
    },
    textTitleLogOff:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:26,
        textShadowColor: 'rgba(36, 65, 79, 0.8)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5
    }
})

export default Account;