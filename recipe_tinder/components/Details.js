import React, { useContext, useState } from 'react';
import { MyContext } from '../MyContext';
import { View, Text, StyleSheet, Button, Pressable, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Details({ navigation }) {
  
  const difficulties = {
    1:'Easy',
    2:'Medium',
    3:'Hard'
  }
  const { level, setLevel, xp, setXP, all_recipes, selectAll, sorted_recipes, sortRecipe, fav_recipes, addFav, current_recipe, setCurrent } = useContext(MyContext)

  const handleIncrease = () => {

    if (xp >= 0.9) {
      setXP(Number((xp - 0.9).toFixed(1)))
      setLevel(level + 1)
    } else {
      setXP(Number((xp + (0.1 * all_recipes[current_recipe].difficulty)).toFixed(1)));
    }
    all_recipes[current_recipe].completed = true
    console.log(all_recipes[current_recipe].ingredients)
    navigation.navigate("Favorites")
  };
  const displayIngredients = () => {
    return all_recipes[current_recipe].ingredients.map((item, index) => {
      return (
        <View>
        <Text style={styles.ingredient}>-{item}</Text>
        </View>
      );
    });

  }
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>{current_recipe}</Text>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.subtitle}>Ingredients:</Text>
        {displayIngredients()}

      </View>
      <Text style={styles.subtitle}>Instructions:</Text>
      <Text style={styles.instructions}>{all_recipes[current_recipe].description}</Text>
      <Text style={styles.instructions}>Difficulty: {difficulties[all_recipes[current_recipe].difficulty]}</Text>
      {all_recipes[current_recipe].completed == false ?
        <Pressable onPress={handleIncrease} style={styles.buttona}>
          <Text style={styles.button_text}>Mark Complete</Text>
        </Pressable> :
        <Pressable onPress={()=>{
          navigation.navigate('Favorites')
        }} style={styles.buttona}>
        <Text style={styles.button_text}>Mark Complete</Text>
      </Pressable>}

    </View>
    </ScrollView>
  );
};
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.1,
    alignItems: 'center',
    paddingHorizontal: 0
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#DF5F1C',
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#3ccf63',
  },
  ingredientsContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: 70
  },
  ingredient: {
    fontSize: 20,
    marginLeft: 20,
    marginVertical: 15
  },
  instructions: {
    fontSize: 20,
    width: '90%',
    marginVertical: 20
  },
  buttona: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 3,
    borderWidth: 3,
    borderColor: '#DF5F1C',
    marginBottom: 100,
  },
  button_text:{
    color: '#DF5F1C',
  }
});

