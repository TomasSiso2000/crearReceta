import { Feather } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, Alert, Platform, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Step1() {
  const [title, setTitle] = useState('');
  const [exists, setExists] = useState(false);
  const [checked, setChecked] = useState(false); // nuevo estado
  const navigation = useNavigation();

  const verificarTitulo = () => {
    const tituloNormalizado = title.trim().toLowerCase();

    if (tituloNormalizado === '') {
      Alert.alert('Ingresá un título');
      return;
    }

    const yaExiste = false; // Simulación de resultado

    setExists(yaExiste);
    setChecked(true);

    if (!yaExiste) {
      Alert.alert('Título disponible');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIconContainer}>
          <View style={styles.circle}>
            <Feather name="arrow-left" size={20} color="#000" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Crea tu propia receta</Text>
      </View>

      {/* Campo título */}
      <Text style={styles.label}>Título</Text>
      <TextInput
        placeholder="Agrega nombre a la receta"
        placeholderTextColor="#B9B9B9"
        value={title}
        onChangeText={(text) => {
          setTitle(text);
          setChecked(false); // resetea cuando cambia
        }}
        style={styles.input}
      />

      {/* Verificar existencia */}
      <TouchableOpacity onPress={verificarTitulo} style={styles.verificarBtn}>
        <Text style={styles.verificarBtnText}>Verificar si el título existe</Text>
      </TouchableOpacity>

      {/* Condicionales */}
      {checked && exists && (
        <>
          <View style={styles.existeBox}>
            <Text style={styles.existeText}>
              Ya tenés una receta creada con el mismo nombre
            </Text>
          </View>

          <View style={styles.botonesContainer}>
            {['Cambiar Nombre', 'Reemplazar Existente', 'Editar Existente'].map((label) => (
              <TouchableOpacity key={label} style={styles.btn}>
                <Text style={styles.btnText}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      {checked && !exists && (
        <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('step2')}>
          <Text style={styles.nextText}>Crear receta</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
  header: {
    height: 95,
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 20,
    position: 'relative',
  },
  backIconContainer: {
    position: 'absolute',
    left: 23,
    top: 30,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    fontFamily: 'Inter_700Bold',
    marginTop: 10,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Inter_200ExtraLight',
    color: '#000',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    borderRadius: 0,
    paddingHorizontal: 10,
    fontSize: 12,
    fontFamily: 'Inter_100Thin',
    color: '#000',
    marginBottom: 10,
  },
  verificarBtn: {
    backgroundColor: '#DAAEEB',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  verificarBtnText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
  },
  existeBox: {
    backgroundColor: '#EAEAEA',
    padding: 20,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  existeText: {
    color: '#A450D6',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#F3E9FB',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 6,
    flex: 1,
    marginHorizontal: 3,
  },
  btnText: {
    color: '#A450D6',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  },
  nextBtn: {
    backgroundColor: '#A450D6',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 24,
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
