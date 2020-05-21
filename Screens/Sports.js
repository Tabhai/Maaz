import React , {Component} from 'react';
import 
{ 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Image,
    TouchableOpacity 
} from 'react-native';

import { Button } from 'react-native-elements'

import {Icon, Left} from 'native-base'

class Lib extends Component {

    render(){
        return(
            <View style = {{flex: 1 , alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    buttonStyle = {{height: '26%', width: '100%', borderRadius: 20, borderWidth: 5, paddingRight: '15%', marginTop: '50%'}}
                    titleStyle = {{fontSize: 24, fontWeight: 'bold', paddingBottom: '3%'}}
                    title = 'Borrow Sports Items'
                    type = 'outline'
                    //onPress = {this.InputCheck} 
                    />
                <Button
                    buttonStyle = {{height: '32%', width: '100%', borderRadius: 20, borderWidth: 5, paddingRight: '15%', marginBottom: '20%'}}
                    titleStyle = {{fontSize: 24, fontWeight: 'bold', paddingBottom: '5%'}}
                    title = 'Return Sports Items'
                    type = 'outline'
                    //onPress = {this.InputCheck} 
                    />
            </View>
        );
    }

}

export default Lib