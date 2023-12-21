import React, {Component} from "react";
import { View,Text,StyleSheet } from "react-native";

class Customcomponent2 extends Component {
    render() {
        return (
            <View>
                <Text style={style.boldtext}>custom component 2</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    boldtext : {
        color:'blue',
        fontSize:20,
    }
})

export default Customcomponent2;