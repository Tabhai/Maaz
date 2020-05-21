import React , {Component} from 'react';
import 
{ 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Image,
    Alert 
} from 'react-native';

import { Button } from 'react-native-elements'
import Home from './Home'
import ValidationComponent from 'react-native-form-validator';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {  emailaddress: '' , 
                        password: '', 
                        validated: false   
                    };
        //this.InputCheck = this.InputCheck.bind(this)               
    }

    InputCheck = () => {
        const {emailaddress} = this.state
        const {password} = this.state

        if(this.state.emailaddress == '' || this.state.password == ''){
            Alert.alert("Cannot leave empty input")
        }
        else{
            /*const IsValid = this.validate({
                emailaddress: {email: true}
            });

            this.setState({IsValid})
            
            console.log('correct')*/
            this.props.navigation.navigate('Home')
        }
    }

    validate = () => {
        let email = this.state.emailaddress
        console.log(email);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //let reg = /([\\w])+\\@(nu.edu.pk)$/
        if (reg.test(email) === false) {
          console.log("Email is Not Correct");
          this.setState({ emailaddress: email })
          return false;
        }
        else {
          this.setState({ emailaddress: email })
          console.log("Email is Correct");
        }
    }

    validateEmail = () => {
        var email = this.state.emailaddress
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //return re.test(String(email).toLowerCase());
        if(re.test(String(email).toLowerCase()) === false){
            console.log('Incorrect')
        }
        else{
            console.log('correct')
        }
      }

      

    render(){
        return(
            <View style = {{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
                <Image style = {{height: '35%', width: '75%' , marginTop: '5%', marginBottom: '20%'}}
                        source = {require('../assets/logo2.png')}/>
                
                <TextInput
                    editable = {true}
                    placeholder = 'Email Address'
                    placeholderTextColor = 'gainsboro'
                    style={{ 
                        height: '8%', borderColor: 'gray',
                        width: '90%', borderWidth: 0.5, 
                        borderRightColor: 'grey',
                        paddingHorizontal: '5%',
                        marginBottom: '5%',
                        borderRadius: 15
                        }}
                    onChangeText={ emailaddress => this.setState({emailaddress})}
                    value={this.state.emailaddress}
                />
                {/*this.isFieldInError('emailAddress') && this.getErrorsInField('emailAddress').map(errorMessage => <Text>{errorMessage}</Text>)*/ }
                <Text style = {{marginBottom: '5%', fontSize: 10, color: 'red'}}>
                    
                </Text>
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
                    onPress = {this.InputCheck} 
                    />
            </View>
        );
    }
}

export default Login