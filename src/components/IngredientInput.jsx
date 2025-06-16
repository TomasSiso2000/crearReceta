import { View, Text } from 'react-native';
import InputField from './InputField';

export default function IngredientInput({ ingredient, onChange }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <InputField
        placeholder="Ingrediente"
        value={ingredient.name}
        onChangeText={(text) => onChange({ ...ingredient, name: text })}
      />
      <InputField
        placeholder="Cantidad"
        value={ingredient.amount}
        onChangeText={(text) => onChange({ ...ingredient, amount: text })}
      />
      <InputField
        placeholder="Unidad (g, ml, etc)"
        value={ingredient.unit}
        onChangeText={(text) => onChange({ ...ingredient, unit: text })}
      />
    </View>
  );
}
