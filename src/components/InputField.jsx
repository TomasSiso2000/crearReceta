import { TextInput, StyleSheet } from 'react-native';

const InputField = ({ placeholder, value, onChangeText, style, keyboardType = 'default' }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#B9B9B9"
      keyboardType={keyboardType}
    />
  );
};
export default InputField;


const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    padding: 10,
    fontSize: 12,
    marginTop: 6,
  },
});

