import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Step4() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crea tu propia receta</Text>

      <View style={styles.card}>
        <Text style={styles.title}>No dispones de conexión gratuita.</Text>
        <Text style={styles.body}>
          Para terminar el proceso de creación podes conectarte a una red gratuita o utilizar una red con cargo a su cuenta.
        </Text>
        <Text style={styles.body}>
          Si lo deseas podes guardar los cambios y finalizar con la carga cuando cuentes con conectividad gratuita.
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Guardar Cambios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Cambiar Red</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#C24DD0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  body: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    backgroundColor: '#D79EEB',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
});
