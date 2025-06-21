import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';
import ProfileRecipeCard from '../../components/ProfileRecipeCard';

const ArchivedScreen = () => {
  const [recipes, setRecipes] = useState([
  {
    id: "1",
    image: { uri: "https://www.recetasderechupete.com/wp-content/uploads/2020/04/ensalada-cesar.jpg" },
    title: "Ensalada César",
    nickName: "nacho"
  },
  {
    id: "2",
    image: { uri: "https://www.recetasderechupete.com/wp-content/uploads/2020/04/pizza-casera.jpg" },
    title: "Pizza Casera",
    nickName: "tomas"
  }
]);


  const handleDelete = (recipeToDelete) => {
    const updated = recipes.filter(recipe => recipe.id !== recipeToDelete.id);
    setRecipes(updated);
  };

  const handleEdit = (recipeToEdit) => {
    console.log('Editar receta:', recipeToEdit);
    // Lógica para redirigir al formulario o modal de edición
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mis Recetas Archivadas</Text>
      {recipes.length === 0 ? (
        <Text style={styles.emptyMessage}>
          Guarda aquí todas las recetas que queres probar en algún momento
        </Text>
      ) : (
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProfileRecipeCard
                recipe={item}
                showEdit={true}
                showDelete={true}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#555',
    marginTop: 50,
    paddingHorizontal: 20
  }
});

export default ArchivedScreen;
