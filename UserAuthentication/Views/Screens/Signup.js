import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Modal, Image} from "react-native";
import Styles from "../../Themes/Styles";
import Loader from "../../Loader";

const Signup = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);

    const onInputChange = (value, setState) => {
        setState(value);
    }

    const signupApi = async () => {

        if (!name) {
            alert('Please fill Name');
            return;
        }
        if (!email) {
            alert('Please fill Email');
            return;
        }
        if (!password) {
            alert('Please fill Password');
            return;
        }
        if (!phoneNumber) {
            alert('Please fill Phonenumber');
            return;
        }

        let values = {
            "name": (name),
            "email": (email),
            "password": (password),
            "phoneNumber": (phoneNumber),
        };
        try {
            setLoading(true);
            const response = await fetch('https://render-dh7f.onrender.com/auth/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            });
            const json = await response.json();
            if (json.success == true) {
                alert('signup success');
                setModalVisible(false);
                setLoading(false);
                setName('');
                setEmail('');
                setPassword('');
                setPhoneNumber('');

            }
            else if (json.status == 400) {
                setLoading(false);
                alert('This emailid already used');
                setName('');
                setEmail('');
                setPassword('');
                setPhoneNumber('');
                return;
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            <Loader loading={loading} />
            <Modal
                animationType='slide'
                transparent={false}
                visible={modalVisible}>
                <View style={[Styles.signupContainer]}>
                    <View style={[Styles.screen, Styles.box]}>
                        <Text style={Styles.sign}>SIGN UP</Text>
                        <TextInput placeholder="Username" style={Styles.input}
                            value={name}
                            onChangeText={(value) => onInputChange(value, setName)}
                            placeholderTextColor={'black'}
                            returnKeyType="next"
                            onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            blurOnSubmit={false}
                        >
                        </TextInput>
                        <TextInput placeholder="Email" style={Styles.input}
                            value={email}
                            onChangeText={(value) => onInputChange(value, setEmail)}
                            placeholderTextColor={'black'}
                            keyboardType="email-address"
                            returnKeyType="next"
                            ref={(input) => { this.secondTextInput = input; }}
                            onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                            blurOnSubmit={false}
                        >
                        </TextInput>
                        <TextInput placeholder="Password" style={Styles.input}
                            value={password}
                            onChangeText={(value) => onInputChange(value, setPassword)}
                            placeholderTextColor={'black'}
                            returnKeyType="next"

                            ref={(input) => { this.thirdTextInput = input; }}
                            onSubmitEditing={() => { this.fourTextInput.focus(); }}
                            blurOnSubmit={false}
                        >
                        </TextInput>
                        <TextInput placeholder="Mobile Number" style={Styles.input}
                            value={phoneNumber}
                            returnKeyType="next"
                            onChangeText={(value) => onInputChange(value, setPhoneNumber)}
                            placeholderTextColor={'black'}
                            ref={(input) => { this.fourTextInput = input; }}
                        >
                        </TextInput>
                        <Pressable style={Styles.btn} onPress={signupApi}>
                            <Text style={{ textAlign: 'center', color: '#fff' }} >SIGN UP</Text>
                        </Pressable>
                        <View style={Styles.new}>
                            <Text style={[Styles.newBtn, Styles.newBtn1]}>Already create account ?</Text>
                            <Text onPress={() => setModalVisible(false)} style={{ color: '#998ED5', fontWeight: 'bold' }}>sign in</Text>
                        </View>
                    </View>
                    <View><Text onPress={() => setModalVisible(false)} style={Styles.cancelText}>
                        <Image style={Styles.cancelImg} source={require('/home/test/AwesomeProject/images/kisspng-check-mark-royalty-free-yes-and-no-flat-design-5adba6dddbd1d0.2455272815243445419004.png')} />
                    </Text>
                    </View>
                </View>
            </Modal>

            <Pressable
                onPress={() => setModalVisible(true)}>
                <Text style={Styles.textStyle}>sign up</Text>
            </Pressable>
        </View>
    );
};
export default Signup;