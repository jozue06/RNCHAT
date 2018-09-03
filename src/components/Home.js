import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component{

    state = {
        userName:'',
    }

    render(){
        return(
            <View>
            <Text>
              Enter Your Name:
            </Text>
            <TextInput placeholder='User Name:' onChangeText={ (text) => { this.setState({userName:text}) } } />
            <TouchableOpacity onPress={ () => { 
               
                Actions.chat({
                     userName: this.state.userName,
                 })
                 this.setState({userName:''})
                 }}>
                <Text>
                    Go!
                </Text>
            </TouchableOpacity>
            </View>
        )   
    }
}