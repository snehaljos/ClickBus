import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet, ScrollView } from 'react-native';
import Button from './Button';
class Logincard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    onLogin() {
        const { username, password } = this.state;

        Alert.alert('Credentials', `${username} + ${password}`);
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.behind}>
                    <View style={styles.RectangleShapeView} />

                </View>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <Button onPress={this.onLogin.bind(this)}>gg</Button>



            </View >

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E3F3FF',
    },

    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    RectangleShapeView: {
        //To make Rectangle Shape
        marginTop: -45,
        width: 256,
        height: 120,
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: '#FFFFFF',
    },
    behind: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginRight: 5,
        marginLeft: 5
    }
});
export default Logincard;