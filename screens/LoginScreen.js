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
  TextInput,
  FormInput
} from 'react-native';
import FormInput from '../components';
import { WebBrowser } from 'expo';
import LoginStyles from '../styles/LoginStyle';
import { TextField } from 'react-native-material-textfield';
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
         
          <FormInput 
            label='Phone number'
            value={this.state.phone}
            onChangeText={ (phone) => this.setState({ phone }) }
          />
        </View>
      );
    }
}

