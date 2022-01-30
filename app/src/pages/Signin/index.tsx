import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../Components/input';

const SignIn = () => {
  return (
    <View>
      <Input placeholder="E-mail" />
      <Input placeholder="Password" />
    </View>
  )
}
export default SignIn;
