import React, { useState } from 'react';

import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";

const images = [

  {

    uri: 'https://www.danishfoodlovers.com/wp-content/uploads/2022/09/Butter-chicken-3.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1',

    details: 'Image 1 Details'

  },

  {

    uri: 'https://3.bp.blogspot.com/-ifXTd_QKsrU/VHvGNKhpB2I/AAAAAAAADRg/U0FAG3qKa0U/s1600/1071258.jpg',

    details: 'Image 2 Details'

  },

  {

    uri: 'https://www.tastingtable.com/img/gallery/the-15-best-additions-to-mac-and-cheese/l-intro-1670687967.jpg',

    details: 'Image 3 Details'

  },

  {

    uri: 'https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/4NIX5ZMIWJEMPFNYBF3HNG575I.png',

    details: 'Image 1 Details'

  },

  {

    uri: 'https://www.cookingclassy.com/wp-content/uploads/2020/01/chicken-and-rice-15.jpg',

    details: 'Image 1 Details'

  },

];

export default function Tinder() {

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

          <Grid style={styles.row} >

            <Col>

              <TouchableOpacity style={styles.addButton} onPress={() => onAddImage(index)}>

                <Image source={require('E:/USF/USF coding/usf_hackathon/hax2023/recipe_tinder/assets/heart.png')} style={styles.addButtonImg} />

              </TouchableOpacity>

            </Col>

            <Col>

              <TouchableOpacity style={styles.removeButton} onPress={() => onRemoveImage(index)}>

                <Image source={require('E:/USF/USF coding/usf_hackathon/hax2023/recipe_tinder/assets/dislike.png')} style={styles.addButtonImg} />

              </TouchableOpacity>

            </Col>

          </Grid>

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

      <Pressable onPress={() => {

        navigation.navigate("GetIngredients")

      }} style={styles.button}>

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

  row: {

    marginTop: 10,

    marginLeft: 50,

  },

  addButton: {

    width: 120,

    backgroundColor: '#3dd60f',

    borderRadius: 20,

  },

  addButtonImg: {

    width: 50,

    height: 50,

    marginLeft: 33,

  },

  removeButton: {

    width: 120,

    backgroundColor: '#d60f0f',

    borderRadius: 20,

  },

  image: {

    width: 300,

    height: 300,

    resizeMode: 'cover',

    borderRadius: 10,

  },

})
