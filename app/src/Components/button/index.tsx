import React from 'react';
import { Button } from 'react-native';
import Input from '../../Components/input';

const SignIn = () => {
  return (
    <Button>
      <Input placeholder="E-mail" />
      <Input placeholder="Password" />
    </Button>
  )
}
export default SignIn;