import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

export default function Step3() {
  const navigation = useNavigation(); // ✅ debe estar dentro del componente

  // Bloquear botón físico "atrás"
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => true;

      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crea tu propia receta</Text>

      <View style={styles.messageBox}>
        <Text style={styles.title}>Tu receta fue creada con éxito.</Text>
        <Text style={styles.body}>
          El resto de la comunidad la tendrá disponible luego de ser evaluada por nuestro equipo
        </Text>
      </View>

      {/* Botón para volver al perfil */}
      <TouchableOpacity 
        onPress={() => navigation.navigate('perfil')} 
        style={styles.button}
      >
        <Text style={styles.buttonText}>Volver al perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Inter_700Bold',
  },
  messageBox: {
    backgroundColor: '#A450D6',
    borderRadius: 8,
    padding: 16,
  },
  title: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 14,
  },
  body: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#A450D6',
    padding: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
