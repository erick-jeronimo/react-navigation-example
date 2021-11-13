import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Register({navigation}) {
  return (
    <View>
      <Text>Teste Register</Text>
      <Button title="Go to Login"
              onPress={() => navigation.navigate('Login')}
      ></Button>
    </View>
  )
}