import React from 'react';
import {SafeAreaView} from 'react-native';
import SignIn from './pages/Signin';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <SignIn />
    </SafeAreaView>
  );
};

export default App;
