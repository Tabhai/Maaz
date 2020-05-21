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

import {Icon, Left} from 'native-base'
import Lib from './Lib'
import Sports from './Sports'

class Home extends Component{

    render(){
        return(
            <View style = {{flex: 1}}>
                <View style = {{flex: 1 , marginTop: '6%',justifyContent: 'center', marginLeft: '5%'}}>
                    <Icon onPress = {this.props.navigation.openDrawer}
                    name = "md-menu" size = {100} style = {{color: 'black',}}/>
                </View>
                <TouchableOpacity
                    style = {{flex:4, alignItems: 'center', justifyContent: 'center'}}
                    onPress = {()=> this.props.navigation.navigate('Lib')}>
                    <Image style = {{height: '50%', width: '40%', borderRadius: 100}}
                        source = {require('../assets/books.jpg')}
                    />
                    <Text style = {{marginTop: '3%', fontSize: 20, color: 'grey', fontWeight: 'bold'}}>
                        Library
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {{flex:4, alignItems: 'center', justifyContent: 'center'}}
                    onPress = {()=> this.props.navigation.navigate('Sports')}>
                    <Image style = {{height: '50%', width: '40%', borderRadius: 100}}
                        source = {require('../assets/sports.jpg')}
                    />
                    <Text style = {{marginTop: '3%', fontSize: 20, color: 'grey', fontWeight: 'bold'}}>
                        Sports Goods
                    </Text>
                </TouchableOpacity>
                <View style = {{flex: 1}}></View>
            </View>
        );
    }

}

export default Home