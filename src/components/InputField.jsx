import { TextInput, StyleSheet } from 'react-native';

export default function InputField({ placeholder, value, onChangeText, style, keyboardType = 'default' }) {
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
}


const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    padding: 10,
    fontSize: 12,
    marginTop: 6,
  },
});

