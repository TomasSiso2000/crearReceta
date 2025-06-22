import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DishTypeInput = ({ selectedDish, onDishChange, customDish, onCustomDishChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de Plato</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedDish}
          onValueChange={onDishChange}
          style={styles.picker}
        >
          <Picker.Item label="Seleccioná el tipo de plato" value="" />
          <Picker.Item label="Pasta" value="pasta" />
          <Picker.Item label="Carne" value="carne" />
          <Picker.Item label="Postre" value="postre" />
          <Picker.Item label="Ensalada" value="ensalada" />
          <Picker.Item label="Otro" value="otro" />
        </Picker>
      </View>

      {selectedDish === 'otro' && (
        <TextInput
          style={styles.customInput}
          placeholder="Especificá el tipo de plato"
          value={customDish}
          onChangeText={onCustomDishChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  pickerWrapper: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    paddingHorizontal: 4,
  },
  picker: {
    width: '100%',
  },
  customInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginTop: 10,
    paddingHorizontal: 10,
    height: 40,
  },
});

export default DishTypeInput;
