import React, { useContext} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../Screens/PostAuthScreens/HomeScreen";
import { Pressable, View, Text, Alert } from "react-native";
import AuthContext from '../../Context/AuthContext/AuthContext';
import Styles from "../../Themes/Styles";
import Profile from "../Screens/Profile";


const PostAuthNavigator = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  const { userSignout } = useContext(AuthContext)

  const onLogout = () => {
    Alert.alert('', 'Are You Exit', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => userSignout() },
    ]);
  }
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => <View>
            <Pressable onPress={onLogout} styles={Styles.parent}>
              <Text style={Styles.dot}></Text>
              <Text style={Styles.dot}></Text>
              <Text style={Styles.dot}></Text>
            </Pressable>
          </View>
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => <View>
            <Pressable styles={Styles.parent}>
              <Text style={Styles.dot}></Text>
              <Text style={Styles.dot}></Text>
              <Text style={Styles.dot}></Text>
            </Pressable>
          </View>
        }}

      />
    </Navigator>
  )
};
export default PostAuthNavigator;