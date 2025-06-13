import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Step2() {
  const [description, setDescription] = useState('');
  const [portions, setPortions] = useState(1);
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [difficulty, setDifficulty] = useState('MEDIO');
  const [minutes, setMinutes] = useState(0);
  const [diet, setDiet] = useState('');
  const navigation = useNavigation();


  return (
    <ScrollView style={styles.container}>
      {/* Imagen */}
      <Text style={styles.label}>Imagen</Text>
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>+</Text>
      </TouchableOpacity>

      {/* Descripción */}
      <Text style={styles.label}>Descripción</Text>
      <TextInput
        placeholder="Describe brevemente el plato"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      {/* Porciones */}
      <Text style={styles.label}>Porciones</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setPortions(Math.max(1, portions - 1))} style={styles.addBtn}><Text>-</Text></TouchableOpacity>
        <Text style={styles.centeredText}>{portions} Porciones</Text>
        <TouchableOpacity onPress={() => setPortions(portions + 1)} style={styles.addBtn}><Text>+</Text></TouchableOpacity>
      </View>

      {/* Ingredientes */}
      <Text style={styles.label}>Ingredientes</Text>
      <TextInput
        placeholder="Ingresa los ingredientes de tu receta"
        style={styles.input}
        value={ingredients}
        onChangeText={setIngredients}
      />

      {/* Instrucciones */}
      <Text style={styles.label}>Instrucciones</Text>
      <View style={styles.instructionsBox}>
        <Text style={styles.instructionsText}>
          Agrega los pasos de la receta, también podes agregar links que ayuden como guía.
        </Text>
      </View>
      <TouchableOpacity style={styles.agregarBtn}>
        <Ionicons name="trash" size={14} />
        <Text style={styles.agregarBtnText}> Agregar instrucción</Text>
      </TouchableOpacity>

      {/* Dificultad */}
      <Text style={styles.label}>Dificultad</Text>
      <View style={styles.row}>
        {['BAJO', 'MEDIO', 'ALTO'].map((level) => (
          <TouchableOpacity
            key={level}
            style={[styles.levelBtn, difficulty === level && styles.selectedLevel]}
            onPress={() => setDifficulty(level)}
          >
            <Text>{level}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tiempo */}
      <Text style={styles.label}>Tiempo</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setMinutes(Math.max(0, minutes - 1))} style={styles.addBtn}><Text>-</Text></TouchableOpacity>
        <Text style={styles.centeredText}>{minutes} minutos</Text>
        <TouchableOpacity onPress={() => setMinutes(minutes + 1)} style={styles.addBtn}><Text>+</Text></TouchableOpacity>
      </View>

      {/* Tipo de Dieta */}
      <Text style={styles.label}>Tipo de Dieta</Text>
      <TextInput
        placeholder="Seleccioná el tipo de Dieta"
        value={diet}
        onChangeText={setDiet}
        style={styles.input}
      />

      {/* Guardar */}
      <TouchableOpacity style={styles.saveBtn} onPress={() => navigation.navigate('step3')}>
        <Text style={styles.saveText}>Guardar Receta</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 16 },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    padding: 10,
    marginTop: 6,
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, marginVertical: 10 },
  addBtn: {
    width: 24,
    height: 24,
    backgroundColor: '#DAAEEB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  addBtnText: { fontSize: 18, fontWeight: 'bold' },
  centeredText: { fontSize: 14 },
  instructionsBox: {
    backgroundColor: '#EAEAEA',
    padding: 12,
    borderRadius: 4,
    marginTop: 6,
  },
  instructionsText: { fontSize: 12, color: '#333' },
  agregarBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    gap: 4,
  },
  agregarBtnText: { fontSize: 12 },
  levelBtn: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  selectedLevel: {
    backgroundColor: '#DAAEEB',
  },
  saveBtn: {
    backgroundColor: '#A450D6',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
