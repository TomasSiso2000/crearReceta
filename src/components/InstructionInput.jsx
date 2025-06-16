import { View } from 'react-native';
import InputField from './InputField';

export default function InstructionInput({ text, onChange }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <InputField
        placeholder="Paso de la receta"
        value={text}
        onChangeText={onChange}
      />
    </View>
  );
}
