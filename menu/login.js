import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,TextInput
  } from 'react-native';

function App() {
    const [, username] = React.useState('');
    const [, password] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
            <TextInput placeholder='your username' style={StyleSheet.username} onChangeText={username} />
            <TextInput placeholder='your password' secureTextEntry style={StyleSheet.password} onChangeText={password} />
            <View style={styles.view}>
                <Text onPress={() => Alert.alert('welcome')} style={styles.login}>Log In</Text>
                <Text onPress={() => Alert.alert('welcome')} style={styles.forget}>Forgot your password?</Text>
                <Text onPress={() => Alert.alert('welcome')} style={styles.signup}>Sign Up</Text>
            </View>
        </SafeAreaView>
        
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D3D3D3',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    username:
    {
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginBottom: 50,
        backgroundColor: 'white',
    },
    login:
    {
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        border: '1px solid yellowgreen',
        boxShadow: '1px 0px 0px 0px yellowgreen',
        marginBottom: '10px',
        borderRadius: 15,
    },
    forget:
    {
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        border: '1px solid yellowgreen',
        boxShadow: '1px 0px 0px 0px yellowgreen',
        marginBottom: '10px',
        borderRadius: 15,
    },
    signup:
    {
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        border: '1px solid yellowgreen',
        boxShadow: '1px 0px 0px 0px yellowgreen',
        marginBottom: '10px',
        borderRadius: 15,
    }
  });
  export default App;