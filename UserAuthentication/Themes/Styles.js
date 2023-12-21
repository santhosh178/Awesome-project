import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    loginContainer: {
        height: 760,
        backgroundColor: '#998ED5',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 60,
    },
    loginScreen: {
        height: 340,
        marginBottom:-30,
    },
    screen: {
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        padding: 16,
        gap: 20,
        width: 300,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 8,
    },
    sign: {
        fontSize: 20,
        color: 'darkblue',
        marginTop: 20,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        width: 200,
        borderRadius: 10,
        opacity:0.6,
        padding: 10,
        paddingLeft: 15,
    },
    btn: {
        width: 180,
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        height: 40,
        backgroundColor: '#998ED5',

    },
    new: {
        marginLeft: -20,
        flexDirection: 'row',
        gap: 5,
    },
    loginText: {
        textAlign: 'center',
        color: '#fff'
    },
    newBtn: {
        color:'black',
        marginTop: -2,
    },
    newBtn1 : {
        marginTop:0,
    },
    card: {
        flexDirection: 'row',
        gap: 30,
        padding: 20,
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: '#fff'
    },

    // signup  screen  //


    signupContainer: {
        height: 760,
        backgroundColor: '#998ED5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupScreen: {
        height: 600,
    },
    cancelText: {
        width: 100,
        height: 100,
        marginLeft: 40
    },
    cancelImg: {
        width: 50,
        height: 40,
    },
    textStyle: {
        color: '#998ED5',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -3,
    },

    // post auth navigator   //

    parent: {
        right: 10,
        top: 4,
    },
    dot: {
        backgroundColor: 'black',
        marginBottom: 3,
        width: 6,
        height: 6,
        borderRadius: 5,
    },
    // homescreen  //

    homeContainer: {
        backgroundColor: '#fff',
        marginTop: 10,
        paddingLeft: 15,
      },
      contacts: {
        flexDirection: 'row',
        marginTop: 5,
        padding: 10,
        gap: 20,
        justifyContent: 'space-between',
      },
     
      homePhone: {
        width: 180,
        padding: 3,
        fontSize: 16,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
        fontWeight: '600',
        borderColor: '#A9A9A9',
        color: '#333'
      },
      left: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    
      homeDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginBottom: 15,
      },
      homeName: {
        color: '#333',
        fontWeight: '400',
        fontSize:20,
        fontFamily:'cochin',
      },
      homeLogo: {
        paddingTop: 10,
        width: 50,
        height: 50,
        textAlign: 'center',
        verticalAlign: 'auto',
        backgroundColor: '#87CEEB',
        borderRadius: 100,
        color: '#fff',
        fontSize: 20,
      },
      accounts: {
        borderBottomWidth: 1,
        borderColor: '#A9A9A9',
        paddingLeft: 14,
      },
      total: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
        fontWeight: '500',
        letterSpacing: 0.7,
      },
      homeMain: {
        backgroundColor: 'white',
        position: 'relative',
    
      },

    // profile //

    top: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    logo: {
        paddingTop: 30,
        width: 120,
        height: 120,
        textAlign: 'center',
        backgroundColor: '#87CEEB',
        marginBottom: 20,
        borderRadius: 100,
        color: '#fff',
        fontSize: 40,
    },
    call: {
        flexDirection: 'row',
        gap: 40,
        justifyContent: 'center',
        marginBottom: 25,
    },
    name: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
    email: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 16,
        paddingTop: 22,
        textAlign: 'center',
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor:'#132257',
    },
    phone: {
        color: '#333',
        fontWeight: '500',
        fontSize: 18,
        marginBottom: 15,
    },
    info: {
        width: 365,
        padding: 10,
        backgroundColor: '#e5e6e5',
        margin: 10,
        borderRadius: 15,
    },
    
    //loader 

    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
      },
      activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      activityIndicator: {
        alignItems: 'center',
        height: 80,
      },

});

export default Styles;