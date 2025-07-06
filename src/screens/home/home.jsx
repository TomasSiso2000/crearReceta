import React, { useEffect, useContext, useState } from 'react';
import { View, SafeAreaView, ScrollView, ActivityIndicator, Text } from 'react-native';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import SectionTitle from '../../components/SectionTitle';
import RecipeCard from '../../components/RecipeCard';
import CategoryCard from '../../components/CategoryCard';
import BottomBar from '../../components/BottonBar';
import { AuthContext } from '../../context/AuthContext';
import NetInfo from '@react-native-community/netinfo';
import useHomeData from '../../api/RECIPE-SERVICE/home/home';

export default function Home({ navigation }) {
  const { token } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
 const [shouldFetchData, setShouldFetchData] = useState(false);
const [checkingConnection, setCheckingConnection] = useState(true);

useEffect(() => {
  const unsubscribe = NetInfo.addEventListener(state => {
    if (!state.isConnected) {
      navigation.replace('createRecipe', { screen: 'stepFive' });
    } else {
      setShouldFetchData(true);
      setCheckingConnection(false);
    }
  });

  return () => {
    unsubscribe(); // limpiamos al desmontar
  };
}, []);


const { data, loading, error } = useHomeData(token, shouldFetchData);

if (checkingConnection || loading) {
  return <ActivityIndicator size="large" style={{ flex: 1 }} />;
}

if (error) {
  return <Text style={{ color: 'red', textAlign: 'center' }}>Error: {error}</Text>;
}

  const { lastThreeRecipes, diet, timeSpent, ability } = data || {};
  const categories = [diet, timeSpent, ability];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SearchBar 
          value={searchTerm}
          onChangeText={setSearchTerm}
          searchAction={() => navigation.navigate("filteredResults", { option: 1, text: searchTerm })}
          filterAction={() => navigation.navigate("filteredResults")}
        />

        {lastThreeRecipes?.success && (
          <>
            <SectionTitle title={lastThreeRecipes.title} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ width: 940, height: "auto", gap: 20 }}>
              {lastThreeRecipes.recipes.map((item, index) => (
                <RecipeCard key={item._id || index} recipe={item} />
              ))}
            </ScrollView>
          </>
        )}

        <SectionTitle title="Categorías" />
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-between", width: "100%" }}>
            {categories.map((item, index) => (
              item?.success && <CategoryCard key={index} data={item} />
            ))}
          </View>
        </ScrollView>
      </View>

      <BottomBar />
    </SafeAreaView>
  );
}
