import React from 'react';
import Input from '../../Components/input';

import{Container} from './styles'

const SignIn = () => {
  return (
    <Container>
      <Input placeholder="E-mail" />
      <Input placeholder="Password" />
    </Container>
  )
}
export default SignIn;
