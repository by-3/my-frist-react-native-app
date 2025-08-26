import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import CustomInput from './src/components/CustomInput';
import CustomButton from './src/components/CustomButton';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const signInSchema = z.object({
  email: z
    .string({message: 'Email is reqired'})
    .email('invalid email'),
  password: z
    .string({message: 'Password is reqired'})
    .min(8, 'Password should be at less 8 characters long'),
});

type SingInFilds = z.infer<typeof signInSchema>;

export default function App() {
  const { control, handleSubmit, 
  } = useForm<SingInFilds>({
    resolver: zodResolver(signInSchema),
  });


  const onSignIn = (data: SingInFilds)=>{
    console.log('press',data);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <Text style={styles.title}>sing in</Text>

      <View style={styles.form}>
        <CustomInput
          placeholder='Email'
          name='email'
          control={control}
          autoFocus 
          autoCapitalize='none'
          keyboardType='email-address'
          autoComplete='email'
          autoCorrect={false}
        />
        
        <CustomInput
          name='password'
          control={control}
          placeholder='password' 
          secureTextEntry
        />

        <CustomButton onPress={handleSubmit(onSignIn)} text='sign in' />
      </View>

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};

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
  form: {
    gap: 20,
  }
});
