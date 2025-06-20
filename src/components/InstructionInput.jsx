import { View } from 'react-native';
import InputField from './InputField';

const InstructionInput = ({ value, onChangeText }) => {
  return (
    <View style={{ marginBottom: 12 }}>
      <InputField
        placeholder="Paso de la receta"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InstructionInput;

