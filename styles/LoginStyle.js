
import React from 'react';
import Colors from '../constants/Colors';
import { NavigationEvents } from 'react-navigation';

export default {
    container: {
      flex: 1,
      backgroundColor: Colors.loginBackground,
      paddingHorizontal: 10,
      paddingTop: 200,
      
    },
  
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },

    header: {
      backgroundColor: Colors.loginBackground,
      padding : 0,
      borderBottomColor: Colors.loginBackground 
    }


  };