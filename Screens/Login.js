import React , {Component} from 'react';
import 
{ 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Image 
} from 'react-native';

import { Button } from 'react-native-elements'
import Home from './Home'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '' , password: ''};
    }

    toHome = () => {
        this.props.navigation.navigate('Home')
    }

    render(){
        return(
            <View style = {{flex: 1, alignItems: 'center'}}>
                <View >
                    <Image style = {{height: '45%', marginTop: '15%'}}
                        source = {require('../assets/logo.png')}/>
                </View>
                <TextInput
                    editable = {true}
                    placeholder = 'Username'
                    placeholderTextColor = 'gainsboro'
                    style={{ 
                        height: '8%', borderColor: 'gray',
                        width: '90%', borderWidth: 0.5, 
                        borderRightColor: 'grey',
                        paddingHorizontal: '5%',
                        marginBottom: '10%',
                        borderRadius: 15
                        }}
                    onChangeText={username => this.setState({ username })}
                    value={this.state.username}
                />
                <TextInput
                    editable = {true}
                    secureTextEntry = {true}
                    placeholder = 'Password'
                    placeholderTextColor = 'gainsboro'
                    style={{ 
                        height: '8%', borderColor: 'gray',
                        width: '90%', borderWidth: 0.5, 
                        borderRightColor: 'grey',
                        paddingHorizontal: '5%',
                        marginBottom: '10%',
                        borderRadius: 15}}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <Button
                    buttonStyle = {{backgroundColor: 'lightskyblue', width: '40%', justifyContent: 'center', paddingRight: '10%'}}
                    title = 'Login'
                    type = 'solid'
                    onPress = {this.toHome} 
                    />
            </View>
        );
    }
}

export default Login