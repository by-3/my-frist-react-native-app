import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <Text style={styles.title}>sing in</Text>
      <TextInput 
        placeholder='Email' 
        style={styles.input} 
        autoFocus 
        autoCapitalize='none'
        keyboardType='email-address'
        autoComplete='email'
        autoCorrect={false}
      />
      <TextInput placeholder='password' style={styles.input} secureTextEntry/>
      <Pressable
        onPress={() => {console.log('press');}}
        style={styles.button}>
        <Text style={styles.textbutton}>Sing in</Text>
      </Pressable>
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
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc'
  },
  button: {
    backgroundColor: '#4353FD',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  textbutton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 600,

  },
});
