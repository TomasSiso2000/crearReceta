import { View } from 'react-native';
import InputField from './InputField';

const InstructionInput = ({ text, onChange }) => {
//const IngredientInput = ({ ingredient, onChange }) => {
  return (
    <View style={{ marginBottom: 12 }}>
      <InputField
        placeholder="Paso de la receta"
        value={text}
        onChangeText={onChange}
      />
    </View>
  );
};
export default InstructionInput;
