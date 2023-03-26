import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, Dimensions, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';



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

        <View style={styles.listContainerWrapper}>
          <ScrollView style={styles.listContainer}>
            {ingredients.map((item, index) => (
              
                <Text style={styles.ingredientsText}>- {item}</Text>
            ))}
          </ScrollView>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Add new ingredient..."
          placeholderTextColor="#3ccf63"
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
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 0,
    alignItems: 'left',
    flexGrow: 0.8,
    paddingBottom: 0,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    padding:0,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#3ccf63',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#3ccf63',
    marginTop: 20
  },
  listContainerWrapper: {
    flex: 1,
    backgroundColor: 'white',
    minHeight: 400, 
  },
  listContainer: {
    flex: 1,
    paddingTop: 22,
    paddingBottom: 20,
  },
  ingredientsText: {
    paddingLeft: 0,
    paddingVertical: 15,
    fontSize: 25,
    color: 'black',
    height: 60,
  },
  input: {
    position: 'absolute',
    top: -90,
    alignSelf: 'center',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#3ccf630a',
    color: '#3ccf63',
    fontSize: 20,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#3ccf63',
  }
});
