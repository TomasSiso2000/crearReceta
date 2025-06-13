import { Feather } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, Alert, Platform, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Step1() {
    const [title, setTitle] = useState("");
    const [exists, setExists] = useState(false);
    const navigation = useNavigation();
  
    const verificarTitulo = () => {
      if (title.trim().toLowerCase() === 'pizza') {
        setExists(true);
      } else {
        setExists(false);
        Alert.alert('Título disponible');
      }
    };
  
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backIconContainer}>
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
            onChangeText={setTitle}
            style={styles.input}
        />


  
        {/* Verificar existencia */}
        <TouchableOpacity onPress={verificarTitulo}>
            <Text style={styles.verificarTexto}>Verificar si el título existe</Text>
        </TouchableOpacity>

  
        {/* Mensaje de conflicto */}
        {exists && (
          <>
            <View style={styles.existeBox}>
              <Text style={styles.existeText}>
                Ya tenes una receta creada con el mismo nombre
              </Text>
            </View>
  
            {/* Botones */}
            <View style={styles.botonesContainer}>
              {['Cambiar Nombre', 'Reemplazar Existente', 'Editar Existente'].map((label) => (
                <TouchableOpacity key={label} style={styles.btn}>
                  <Text style={styles.btnText}>{label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('step2')}>
          <Text style={styles.nextText}>Crear receta</Text>
        </TouchableOpacity>

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
    justifyContent: 'center',
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
  backButton: {
    position: 'absolute',
    left: 20,
  },
  backIcon: {
    fontSize: 26,
    color: '#000',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700', // Omitible si ya usás fontFamily
    color: '#000',
    fontFamily: 'Inter_700Bold', // usa la fuente cargada
  },  
  label: {
    fontSize: 16,
    fontFamily: 'Inter_200ExtraLight', // o 'Inter_300Light' si no está disponible el 200
    color: '#000',
    marginBottom: 5,
  },  
  input: {
    width: '100%', // se adapta al contenedor
    height: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.06)', // igual al 6% de opacidad
    borderRadius: 0,
    paddingHorizontal: 10,
    fontSize: 12,
    fontFamily: 'Inter_100Thin',
    color: '#000',
    marginBottom: 10,
  },
  verificarTexto: {
    backgroundColor: 'rgba(218, 174, 235, 0.53)',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 9,
    color: '#000', // <- este cambio lo hace más fuerte
    fontFamily: 'Inter_100Thin',
    marginBottom: 20,
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
