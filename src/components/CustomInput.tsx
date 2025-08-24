import { 
  StyleSheet,
  TextInput, 
  TextInputProps
} from 'react-native';

type CustomInputProps = {} & TextInputProps

export default function CustomInput(props: CustomInputProps) {
    return (
        <TextInput {...props} style={[styles.input, props.style]}/>
    )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc'
  }
});