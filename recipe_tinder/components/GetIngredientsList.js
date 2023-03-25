import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, Dimensions, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
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
    <View style={styles.container}>
      <View contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Ingredients Here</Text>

        <ScrollView style={styles.listContainer}>
          {ingredients.map((item, index) => (
            <Text style={styles.ingredientsText} key={index}>- {item}</Text>
          ))}
        </ScrollView>

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
      </View>
    </View>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 150,
    backgroundColor: '#000000',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    alignItems: 'left',
    flexGrow: 0.8,
    paddingBottom: 50,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    padding:0,
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
  listContainer: {
    flex: 1,
    paddingTop: 22,
    minHeight: 400, 
  },
  ingredientsText: {
    paddingLeft: 0,
    paddingVertical: 25,
    fontSize: 25,
    color: 'white',
    height: 40,
  },
  input: {
    position: 'absolute',
    top: -90,
    alignSelf: 'center',
    width: '100%',
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
