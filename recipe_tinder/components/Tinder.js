import React, { useState } from 'react';

import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native';

const images = [

  {

    uri: 'https://cdn.sanity.io/images/ordgikwe/production/3b881f9bcf37a73482e7dcc13fc5b94665256682-1600x1200.jpg?w=768&h=576&auto=format',

    details: 'Image 1 Details'

  },

  {

    uri: 'https://d33wubrfki0l68.cloudfront.net/487cd2effeeccb6540871a7f18d1d1e5c9b381d3/d0cfc/docs/assets/native-modules-android-open-project.png',

    details: 'Image 2 Details'

  },

  {

    uri: 'https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1129718/retina_500x200_cover-cold-dive-into-react-native-a-beginners-tutorial-922a625efe84a4c2d782343b333b0bdb.png',

    details: 'Image 3 Details'

  },

];

export default function Tinder({navigation}) {

  const [selectedImage, setSelectedImage] = useState(null);

  const [imageList, setImageList] = useState(images);

  const onRemoveImage = (index) => {

    const newList = imageList.filter((item, i) => i !== index);

    setImageList(newList);

  };

  const onAddImage = (index) => {

    const newList = imageList.filter((item, i) => i !== index);

    setSelectedImage(imageList[index]);

    setImageList(newList);

  };

  const renderImageList = () => {

    return imageList.map((item, index) => {

      return (

        <View style={styles.imageContainer} key={index}>

          <TouchableOpacity onPress={() => setSelectedImage(item)}>

            <Image source={{ uri: item.uri }} style={styles.image} />

          </TouchableOpacity>

          <Text style={styles.details}>{item.details}</Text>

          <TouchableOpacity style={styles.removeButton} onPress={() => onRemoveImage(index)}>

            <Text style={styles.removeButtonText}>Remove</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.addButton} onPress={() => onAddImage(index)}>

            <Text style={styles.addButtonText}>Add to another page</Text>

          </TouchableOpacity>

        </View>

      );

    });

  };

  return (

    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollView}>

        {renderImageList()}

      </ScrollView>

      {selectedImage && (

        <View style={styles.selectedImageContainer}>

          <Image source={{ uri: selectedImage.uri }} style={styles.selectedImage} />

          <Text style={styles.details}>{selectedImage.details}</Text>

        </View>

      )}

      <Text style={styles.title}>Welcome</Text>

      <Pressable onPress={() => {

        navigation.navigate("GetIngredients")

      }} style={styles.button}>

        <Text style={styles.button_text}>Go to Tinder</Text>

      </Pressable>

      <View style={styles.box1} />

      <Pressable onPress={() => {

        navigation.navigate("GetIngredients")

      }} style={styles.button}>

        <Text style={styles.button_text}>Go to Tinder</Text>

      </Pressable>

      <View style={styles.button_container}>

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    paddingTop: 20,

    backgroundColor: '#fff',

  },

  scrollView: {

    alignItems: 'center',

  },

  imageContainer: {

    width: '100%',

    alignItems: 'center',

    marginBottom: 20,

  },

  image: {

    width: 200,

    height: 200,

    resizeMode: 'cover',

    borderRadius: 10,

  },

})