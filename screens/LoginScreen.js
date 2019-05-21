import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
  Button,
  TextInput
} from 'react-native';
import { WebBrowser } from 'expo';
import LoginStyles from '../styles/LoginStyle';
import { TextField } from 'react-native-material-textfield';
import { Header, Icon } from 'react-native-elements'
// import AppNavigator from '../navigation/AppNavigator';

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      phone:"",
      titleText: "Bird's Nest",
      bodyText: 'This is not really a bird nest.'
    };
  }

  static navigationOptions = {
      header: null,
    };

    render() {
      return (
        <View style={LoginStyles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
         
            
          <Icon
            name='television'
            type='font-awesome'
            color='#fff' 
            size = {70}
            />
          <TextField 
            baseColor = "rgb(255, 255, 255)"
            tintColor = "rgb(255, 255, 255)"
            label='Phone number'
            value={this.state.phone}
            onChangeText={ (phone) => this.setState({ phone }) }
          />
        </View>
      );
    }
}

