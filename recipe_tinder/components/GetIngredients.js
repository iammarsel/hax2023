import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';



export default function GetIngredients({ navigation }) {
  const [imageUri, setImageUri] = useState(null);

  const requestCameraRollPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access the photo library is required!');
    }
  };

  const handleChooseImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);
      if (!result.canceled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log('Image picker error:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Scan your fridge here:</Text>
  
      
      <TouchableWithoutFeedback onPress={handleChooseImage} style={styles.fridge}>
      <View>
      <Image
      style={styles.logo}
      source={require('../assets/fridge.png')}
       />
       </View>      
      </TouchableWithoutFeedback>


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
  logo: {
    borderRadius: 100,
    elevation: 10,
    shadowColor: '#3ccf63',

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
