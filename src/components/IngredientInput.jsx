import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Asegurate de tenerlo instalado
import InputField from './InputField';

const unidades = ['g', 'kg', 'ml', 'l', 'cucharadas', 'tazas', 'unidad'];

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
        value={ingredient.quantity}
        onChangeText={(text) => onChange({ ...ingredient, quantity: text })}
        keyboardType="numeric"
      />

      <Picker
        selectedValue={ingredient.unit}
        style={styles.picker}
        onValueChange={(value) => onChange({ ...ingredient, unit: value })}
      >
        <Picker.Item label="Seleccionar unidad" value="" />
        {unidades.map((unidad) => (
          <Picker.Item key={unidad} label={unidad} value={unidad} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    backgroundColor: '#f0f0f0',
    marginTop: 6,
    padding: 10,
    borderRadius: 4,
  },
});

