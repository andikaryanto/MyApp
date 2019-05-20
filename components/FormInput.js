
import React from 'react';
import { TextField } from 'react-native-material-textfield';

export class FormInput extends TextField { 
    constructor(props) {
        super(props);
    }
    render(){
        return (
        <TextField 
            baseColor = "rgb(255, 255, 255)"
            tintColor = "rgb(255, 255, 255)"
          />
        );
    }
}