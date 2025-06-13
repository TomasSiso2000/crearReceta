import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/home/home.jsx";
import Welcome from "../screens/welcome/welcome.jsx";
import Onboarding from "../screens/onboarding/Onboarding.jsx";
import SignUpFlowStackNatigator from "../navigation/signUpFlowStackNavigator.js"
import SingIn from "../screens/signIn/SignIn.jsx";
import RecoverAccountFlowStackNavigator from "../navigation/recoverAccountFlowStackNavigator.js";
import ProfileFlowStackNavigator from "../navigation/profileFlowStackNavigator.js";
import SearchBar from "../screens/SearchBar/FilterScreen.jsx";
import FilteredResultsScreen from '../screens/home/FilteredResultsScreen.jsx';
import RecipeDetailScreen from '../screens/Recipes/RecipeDetailScreen';
import AddRatingScreen from "../screens/Recipes/AddRatingScreen.jsx";
import step1 from "../screens/create-recipe/step1.jsx";
import step2 from "../screens/create-recipe/step2.jsx";
import Step3 from '../screens/create-recipe/step3.jsx';
import step4 from "../screens/create-recipe/step4.jsx";



const Stack = createNativeStackNavigator();

export default function mainStackNavigator() {
    return(
        <Stack.Navigator initialRouteName="step1">
            <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }}/>
            <Stack.Screen name="home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="onboarding" component={Onboarding}/>
            <Stack.Screen name="signIn" component={SingIn} options={{headerShown:false}}/>
            <Stack.Screen name="signUpFlowStackNatigator" component={SignUpFlowStackNatigator} options={{headerShown:false}}/>
            <Stack.Screen name="recoverAccountFlowStackNavigator" component={RecoverAccountFlowStackNavigator} options={{headerShown:false}}/>
            <Stack.Screen name="profileFlowStackNavigator" component={ProfileFlowStackNavigator} options={{headerShown:false}}/>
            <Stack.Screen name="filter" component={SearchBar} />
            <Stack.Screen name="filteredResults" component={FilteredResultsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={{ title: 'Ver Receta' }}/>
            <Stack.Screen name="AddRating" component={AddRatingScreen} />
            <Stack.Screen name="step1" component={step1} />
            <Stack.Screen name="step2" component={step2} />
            <Stack.Screen name="step3" component={Step3} />
            <Stack.Screen name="step4" component={step4} />
        </Stack.Navigator>
    );
};
