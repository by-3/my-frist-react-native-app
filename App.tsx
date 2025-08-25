import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomInput from './src/components/CustomInput';
import React from 'react';
import CustomButton from './src/components/CustomButton';

export default function App() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <Text style={styles.title}>sing in</Text>

      <CustomInput 
        placeholder='Email' 
        autoFocus 
        autoCapitalize='none'
        keyboardType='email-address'
        autoComplete='email'
        autoCorrect={false}
      />

      <CustomInput placeholder='password' secureTextEntry/>

      <CustomButton onPress={() => {console.log('press');}} text='sign in' />

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
  },
});
