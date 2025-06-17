import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PlusMinusButton = ({ onPress, symbol = '+' }) => {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{symbol}</Text>
    </TouchableOpacity>
  );
};
export default PlusMinusButton;

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
    backgroundColor: '#DAAEEB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
