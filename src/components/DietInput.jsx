import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DietInput = ({ selectedDiet, onChange }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.label}>Tipo de Dieta</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedDiet}
          onValueChange={onChange}
          style={styles.picker}
        >
          <Picker.Item label="Seleccioná el tipo de dieta" value="" />
          <Picker.Item label="Omnívoro" value="omnivoro" />
          <Picker.Item label="Vegano" value="vegano" />
          <Picker.Item label="Vegetariano" value="vegetariano" />
          <Picker.Item label="Pescetariano" value="pescetariano" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  pickerWrapper: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  picker: {
    width: '100%',
  },
});

export default DietInput;
