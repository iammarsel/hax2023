import React, { useContext,useState } from 'react';
import { MyContext } from '../MyContext';
import { View, Text, StyleSheet, Button, Pressable,Dimensions } from 'react-native';

export default function Details({ navigation }) {
  const [completed, setCompleted] = useState(false);
  
  const {level, setLevel,xp,setXP} = useContext(MyContext)
  
    const handleIncrease = () => {
      
      if (xp >= 0.9){
        setXP(Number((xp-0.9).toFixed(1)))
        //setXP(Number((xp).toFixed(1)))
        setLevel(level+1)
      } else {
        setXP(Number((xp + 0.1).toFixed(1)));
        //setXP(Number((xp).toFixed(1)))
      }
      navigation.navigate("Home")
    };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Butter Chicken</Text>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.subtitle}>Ingredients:</Text>
        <Text style={styles.ingredient}>- Chicken</Text>
        <Text style={styles.ingredient}>- Rice</Text>
        <Text style={styles.ingredient}>- Yogurt</Text>
      </View>
      <Text style={styles.subtitle}>Instructions:</Text>
      <Text style={styles.instructions}>1. Cook the chicken in a pan until browned on all sides.</Text>
      <Text style={styles.instructions}>2. Add the rice and cook until slightly browned.</Text>
      <Text style={styles.instructions}>3. Add the yogurt and stir until everything is combined.</Text>
      <Pressable onPress={handleIncrease} style={styles.buttona}>
        <Text style={styles.button_text}>Mark Complete</Text>
      </Pressable>
    </View>
  );
};
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height*0.1,
    alignItems: 'center',
    paddingHorizontal: 0
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#3ccf63',
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
    marginVertical: 50
  },
  ingredient: {
    fontSize: 16,
    marginLeft: 20,
    marginVertical:10
  },
  instructions: {
    fontSize: 16,
    marginVertical:20
  },
  buttona: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal:10,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#358c2d'
  }
});

