import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, Dimensions, Image } from 'react-native';
const ImagePicker = require('react-native-image-picker');

export default function GetIngredients({ navigation }) {
  const [imageUri, setImageUri] = useState(null);

  const handleChooseImage = () => {
    ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    },
    (response) => {
      console.log(response);
      this.setState({
        resourcePath: response
      });
    },
  )
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan your fridge here:</Text>

      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      
      <Pressable onPress={handleChooseImage} style={styles.fridge}>
      <Image
        style={styles.logo}
        source={require('../assets/fridge.png')}
      />
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("GetIngredientsList")
      }} style={styles.button}>
        <Text style={styles.button_text}>Go to the List</Text>
      </Pressable>
    </View>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingTop: height*0.1,
    paddingHorizontal: 40,
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
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
  }
});
