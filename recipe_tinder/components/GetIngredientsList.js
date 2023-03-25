import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, Dimensions, Image, TextInput, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AA({ navigation }) {
  const [text, setText] = useState('');
  const [ingredients, setIngredients] = useState(['Eggs', 'Tomato', 'Chicken', 'Cheese']);

  const handleAdd = () => {
    if (text.length > 0) {
      setIngredients([...ingredients, text]);
      setText('');
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ingredients Here</Text>

      <View style={styles.listContainer}>
        {ingredients.map((item, index) => (
          <Text style={styles.ingredientsText} key={index}>- {item}</Text>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Add new ingredient..."
        placeholderTextColor="#a9a9a9"
        value={text}
        onChangeText={(value) => setText(value)}
        onSubmitEditing={handleAdd}
      />

      <Pressable onPress={() => {
        navigation.replace("Tinder")
      }} style={styles.button}>
        <Text style={styles.button_text}>Go to the List</Text>
      </Pressable>
      <View >
    <Text style={styles.padding}>Go to the List</Text>
    </View>

    </ScrollView>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    paddingTop: height*0.1,
    paddingHorizontal: 40,
    alignItems: 'left',
    flexGrow: 1,
    paddingBottom: 50
  },padding:{
    paddingTop: 800,
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#03c2fc',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#03c2fc',
    marginTop: 20
  },
  fridge: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    marginTop: 20
  },
  button_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20
  },
  ingredientsContainer: {
    flex: 1,
    paddingTop: 22,
  },
  ingredientsText: {
    paddingLeft: 0,
    paddingVertical: 30,
    fontSize: 25,
    color: 'white',
    height: 44,
  },
  input: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#1c1c1c',
    color: 'white',
    fontSize: 20,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#a9a9a9',
  }
});
