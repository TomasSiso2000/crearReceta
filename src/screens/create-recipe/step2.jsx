import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import InputField from '../../components/InputField';
import PlusMinusButton from '../../components/PlusMinusButton';
import IngredientInput from '../../components/IngredientInput';
import InstructionInput from '../../components/InstructionInput';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';
import GetImageComponent from '../../components/GetImageComponent';
import { Image } from 'react-native';

export default function Step2() {
  const navigation = useNavigation();
  const [description, setDescription] = useState('');
  const [portions, setPortions] = useState(1);
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '', unit: '' }]);
  const [instructions, setInstructions] = useState(['']);
  const [difficulty, setDifficulty] = useState('MEDIO');
  const [minutes, setMinutes] = useState(0);
  const [diet, setDiet] = useState('');
  const [image, setImage] = useState(null);
  const [showImagePicker, setShowImagePicker] = useState(false);


  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '', unit: '' }]);
  };

  const updateIngredient = (index, updated) => {
    const updatedList = [...ingredients];
    updatedList[index] = updated;
    setIngredients(updatedList);
  };

  const removeIngredient = (index) => {
    const updated = ingredients.filter((_, i) => i !== index);
    setIngredients(updated);
  };

  const removeInstruction = (index) => {
  const updated = instructions.filter((_, i) => i !== index);
  setInstructions(updated);
};

  const addInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const updateInstruction = (index, value) => {
    const updated = [...instructions];
    updated[index] = value;
    setInstructions(updated);
  };

  const validarYContinuar = () => {
  if (!description.trim()) {
    Alert.alert('Falta la descripción');
    return;
  }

  if (ingredients.length === 0 || ingredients.some(i => !i.name.trim() || !i.quantity.trim() || !i.unit.trim())) {
    Alert.alert('Completá todos los ingredientes');
    return;
  }

  if (instructions.length === 0 || instructions.some(i => !i.trim())) {
    Alert.alert('Completá todas las instrucciones');
    return;
  }

  if (!diet.trim()) {
    Alert.alert('Seleccioná el tipo de dieta');
    return;
  }

  if (minutes === 0) {
    Alert.alert('Ingresá un tiempo de preparación válido');
    return;
  }

  // Si pasa todo:
  navigation.navigate('step3');
};


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Imagen</Text>
        {image ? (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
            <Image source={{ uri: image }} style={styles.imagePreview} />
            <TouchableOpacity onPress={() => setImage(null)} style={styles.removeImageBtn}>
            <Ionicons name="trash" size={20} color="black" />
            </TouchableOpacity>
        </View>
        ) : (
        <TouchableOpacity style={styles.addBtn} onPress={() => setShowImagePicker(true)}>
            <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
        )}
        <GetImageComponent
        visible={showImagePicker}
        setVisible={setShowImagePicker}
        onImageSelected={(uri) => setImage(uri)}
        />


      <Text style={styles.label}>Descripción</Text>
      <InputField placeholder="Describe brevemente el plato" value={description} onChangeText={setDescription} />

      <Text style={styles.label}>Porciones</Text>
      <View style={styles.row}>
        <PlusMinusButton symbol="-" onPress={() => setPortions(Math.max(1, portions - 1))} />
        <Text style={styles.centeredText}>{portions} Porciones</Text>
        <PlusMinusButton symbol="+" onPress={() => setPortions(portions + 1)} />
      </View>

      <Text style={styles.label}>Ingredientes</Text>
      {ingredients.map((item, index) => (
        <View key={index} style={{ marginBottom: 12 }}>
            <IngredientInput
                ingredient={item}
                onChange={(updated) => updateIngredient(index, updated)}
            />
            <TouchableOpacity onPress={() => removeIngredient(index)}>
             <Text style={styles.removeText}>🗑️ Borrar ingrediente</Text>
            </TouchableOpacity>
        </View>
       ))}

      <TouchableOpacity onPress={addIngredient} style={styles.agregarBtn}>
        <Ionicons name="add" size={14} />
        <Text style={styles.agregarBtnText}> Agregar ingrediente</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Instrucciones</Text>
      {instructions.map((step, index) => (
        <View key={index} style={{ marginBottom: 12 }}>
            <InstructionInput
                value={step}
                onChangeText={(text) => updateInstruction(index, text)}
            />
            <TouchableOpacity onPress={() => removeInstruction(index)}>
                <Text style={styles.removeText}>🗑️ Borrar instrucción</Text>
            </TouchableOpacity>
        </View>
       ))}

      <TouchableOpacity onPress={addInstruction} style={styles.agregarBtn}>
        <Ionicons name="add" size={14} />
        <Text style={styles.agregarBtnText}> Agregar instrucción</Text>
      </TouchableOpacity>

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

      <Text style={styles.label}>Tiempo</Text>
        <View style={styles.row}>
            <TextInput
                style={styles.timeInput}
                placeholder="Minutos"
                value={minutes.toString()}
                onChangeText={(text) => {
                    const num = parseInt(text, 10);
                    if (!isNaN(num) && num >= 0) {
                        setMinutes(num);
                    } else if (text === '') {
                        setMinutes(0);
                    }
                }}
                keyboardType="numeric"
                maxLength={3}
            />
            <Text style={styles.centeredText}>minutos</Text>
        </View>


      <Text style={styles.label}>Tipo de Dieta</Text>
      <InputField placeholder="Seleccioná el tipo de Dieta" value={diet} onChangeText={setDiet} />

      <TouchableOpacity style={styles.saveBtn} onPress={validarYContinuar}>
        <Text style={styles.saveText}>Guardar y continuar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 16 },
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
  timeInput: {
    width: 60,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  imagePreview: {
  width: 80,
  height: 80,
  borderRadius: 8,
  marginRight: 10,
  },
  removeImageBtn: {
  padding: 6,
  backgroundColor: '#eee',
  borderRadius: 8,
  },
  removeText: {
  color: '#A450D6',
  fontSize: 12,
  marginTop: 4,
  marginLeft: 4,
}
});

