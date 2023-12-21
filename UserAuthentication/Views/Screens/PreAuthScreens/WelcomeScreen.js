import React, { useState, useContext } from 'react';
import AuthContext from '../../../Context/AuthContext/AuthContext';
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform,Image } from "react-native";
import Signup from '../Signup';
import { login } from '../../../Util/ApiUtils';
import Styles from '../../../Themes/Styles';
import { useHeaderHeight } from '@react-navigation/elements';
import Loader from '../../../Loader';

const WelcomeScreen = () => {

    const { onAuthentication } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const headerHeight = useHeaderHeight();

    const onInputChange = (value, setState) => {
        setState(value);
    }

    const loginApi = async () => {
        setErrortext('');
        if (!email) {
            alert('Please fill Email');
            return;
        }
        if (!password) {
            alert('Please fill Password');
            return;
        }

        let values = {
            "email": (email),
            "password": (password),
        };
        try {
            setLoading(true);
            const data = await login(values);
            setEmail('');
            setPassword('');
            onAuthentication(`${data.tokenType} ${data.accessToken}`);
        }
        catch (error) {
            setLoading(false);
            if (error.status == 401) {
                alert('please check your email or password');
                return;
            }
            if (error.status == 400) {
                alert('goto signup first');
                return;
            }
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            keyboardVerticalOffset={headerHeight}
            style={[Styles.loginContainer]}
        >
            <Loader loading={loading} />
            <Image style={Styles.image} source={require('/home/test/AwesomeProject/android/app/src/main/ic_launcher-playstore.png')}/>
            <View style={[Styles.screen, Styles.loginScreen]}>
                <Text style={Styles.sign}>SIGN IN</Text>
                <TextInput
                    style={Styles.input}
                    placeholder="Enter your email.."
                    value={email}
                    onChangeText={(value) => onInputChange(value, setEmail)}
                    keyboardType="email-address"
                    placeholderTextColor={'black'}
                    returnKeyType="next"
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    blurOnSubmit={false}
                />
                <TextInput
                    style={Styles.input}
                    secureTextEntry={true}
                    placeholder="Enter your password.."
                    value={password}
                    onChangeText={(value) => onInputChange(value, setPassword)}
                    placeholderTextColor={'black'}
                    returnKeyType="next"
                    ref={(input) => { this.secondTextInput = input; }}
                />
                <Pressable style={Styles.btn} onPress={loginApi} >
                    <Text style={Styles.loginText}>Login</Text>
                </Pressable>
                <View style={Styles.new}>
                    <Text style={Styles.newBtn}>create new account ?</Text>
                    <Signup />
                </View>
            </View>
        </KeyboardAvoidingView>

    );
};
export default WelcomeScreen;