import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Login({navigation}) {
  return (
    <View>
      <Text>Teste Login</Text>
      <Button title="Go to Register"
              onPress={ () => navigation.navigate('Register')}
      ></Button>
    </View>
  )
}