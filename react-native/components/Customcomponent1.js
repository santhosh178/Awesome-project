import React,{Component} from "react";
import { View,Text, StyleSheet} from "react-native";

class Customcomponent1 extends Component {
    render() {
        return (
            <View>
                <Text style = {style.boldtext}>custom component 1 </Text>
            </View>
        );
    }
};


const style = StyleSheet.create({
    boldtext : {
        color:'red',
        fontSize:30,
    }
})


export default Customcomponent1;