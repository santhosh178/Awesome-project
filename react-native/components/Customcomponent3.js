import React,{ Component } from "react";
import { View,Text,StyleSheet } from "react-native";

class Customcomponent3 extends Component {
    render(){
        return(
            <View>
                <Text style={style.boldtext}>
                    custom component 3
                </Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    boldtext : {
        color:'green',
        fontSize:30,
    }
})


export default Customcomponent3;

