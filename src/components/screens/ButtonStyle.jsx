import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ButtonStyle = ({title,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#4f79d1',
        borderWidth:1,
        borderColor:"#000",
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        width:110,
        height:34
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
        color:'#FFF',
        textShadowColor: 'rgba(0, 0, 0, 5)',
        textShadowOffset: { width: 2, height: 2 }, // Shadow offset
        textShadowRadius: 5
    }
}) 

export default ButtonStyle;