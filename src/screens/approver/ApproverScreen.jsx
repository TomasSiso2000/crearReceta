import React, { useEffect, useState, useContext } from "react";
import { Text, View, SafeAreaView, ScrollView, Platform, StatusBar, StyleSheet } from "react-native";
import BackButtonComponent from "../../components/BackButtonComponent";
import ButtonComponent from "../../components/ButtonComponent";
import useShowVoteNotApproved from "../../api/RECIPE-SERVICE/comments/showVoteNotApproved";
import useShowRecipeNotApproved from "../../api/RECIPE-SERVICE/createRecipe/showRecipeNotApproved";
import { AuthContext } from '../../context/AuthContext';
import ExpandableRecipeCard from "./ExpandableRecipeCard";
import ExpandableVoteCard from "./ExpandableVoteCard";
import approveComment from "../../api/RECIPE-SERVICE/comments/approveComment";
import approveRecipe from "../../api/RECIPE-SERVICE/createRecipe/approveRecipe";
import NetInfo from '@react-native-community/netinfo'; // Asegurate de tener esta línea al principio


export default function ApproverScreen({ navigation }) {
  const { token } = useContext(AuthContext);
  const [btnRecipe, setBtnRecipe] = useState(false);
  const [btnComment, setBtnComment] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [comments, setComments] = useState([]);

  const { data: recipeData } = useShowRecipeNotApproved(token);
  const { data: voteData } = useShowVoteNotApproved(token);

  useEffect(() => {
    if (recipeData?.success) setRecipes(recipeData.recipes || []);
    if (voteData?.success) setComments(voteData.votes || []);
  }, [recipeData, voteData]);

  const showRecipe = () => {
    setBtnRecipe(!btnRecipe);
    if (btnComment) setBtnComment(false);
  };

  const showComment = () => {
    setBtnComment(!btnComment);
    if (btnRecipe) setBtnRecipe(false);
  };

  const handleApproveComemnt = async (id, accept) => {
  const netState = await NetInfo.fetch();
  if (!netState.isConnected) {
    navigation.navigate('createRecipe', { screen: 'stepFour' }); // Redirección correcta
    return;
  }

  const result = await approveComment(token, id, accept);
  if (result?.success) {
    setComments(prev => prev.filter(comment => comment._id !== id));
  }
};

const handleApproveRecipe = async (id, accept) => {
  const netState = await NetInfo.fetch();
  if (!netState.isConnected) {
    navigation.navigate('createRecipe', { screen: 'stepFour' }); // Redirección correcta
    return;
  }

  const result = await approveRecipe(token, id, accept);
  if (result.success) {
    setRecipes(prev => prev.filter(r => r._id !== id)); 
  } else {
    alert(result.message || "Error al aprobar la receta");
  }
};

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER con botón de retroceso y título */}
      <View style={styles.header}>
        <BackButtonComponent navigation={navigation} mode="reset" to="profileFlowStackNavigator" />
        <Text style={styles.title}>Administrador</Text>
      </View>

      <ButtonComponent onPress={showRecipe}>Ver Recetas</ButtonComponent>
      <ButtonComponent onPress={showComment}>Ver Comentarios</ButtonComponent>

      <ScrollView style={{ width: '100%' }}>
        {btnRecipe && recipes.length > 0 && recipes.map((recipe) => (
          <ExpandableRecipeCard
            key={recipe._id}
            recipe={recipe}
            showDelete={true}
            showApprove={true}
            onAprove={() => handleApproveRecipe(recipe._id, true)}
            onDelete={() => handleApproveRecipe(recipe._id, false)}
            navigation={navigation}
            source={"profile"}
          />
        ))}

        {btnRecipe && recipes.length === 0 && (
          <Text style={styles.emptyText}>No hay recetas pendientes</Text>
        )}

        {btnComment && comments.length > 0 && comments.map((vote) => (
          <ExpandableVoteCard
            key={vote._id}
            vote={vote}
            showApprove={true}
            showDelete={true}
            onApprove={() => handleApproveComemnt(vote._id, true)}
            onDelete={() => handleApproveComemnt(vote._id, false)}
          />
        ))}

        {btnComment && comments.length === 0 && (
          <Text style={styles.emptyText}>No hay comentarios pendientes</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: '100%',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
