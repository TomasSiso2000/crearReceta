import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FilteredResult from '../../components/FilteredResult';

const filters = [
  'Nombre de Usuario',
  'Con estos Ingredientes',
  'Sin estos ingredientes',
  'Nombre de Receta',
  'Tipo (Carne, Pasta)',
];

const FilteredResultScreen = () => {
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const resetFilter = () => {
    setSelected(null);
    setSearchTerm('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* BARRA SUPERIOR que cambia dinámicamente */}
      <View style={styles.headerButton}>
  {filters[selected] === 'Nombre de Usuario' ? (
    <View style={styles.inlineSearchBar}>
      <TouchableOpacity onPress={resetFilter}>
        <Ionicons name="arrow-back-circle-outline" size={24} color="#999" />
      </TouchableOpacity>
      <TextInput
        placeholder="Escribí el nombre de usuario"
        placeholderTextColor="#aaa"
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
    </View>
  ) : (
    <Text style={styles.headerText}>Selecciona el filtro para empezar</Text>
  )}
</View>


      {/* Lista de opciones */}
      {filters.map((filter, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={() => setSelected(index)}
        >
          <Ionicons
            name={selected === index ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color="#888"
          />
          <Text style={styles.optionText}>{filter}</Text>
        </TouchableOpacity>
      ))}

      {/* Resultados si aplica */}
      {selected !== null && (
        <FilteredResult
          searchTerm={searchTerm}
          selected={selected}
        />
      )}


    </ScrollView>
  );
};

export default FilteredResultScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  headerButton: {
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
    padding: 12,
    elevation: 3,
    justifyContent: 'center',
    marginBottom: 20,
    minHeight: 50,
  },
  headerText: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
  },
  inlineSearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#444',
  },
});
