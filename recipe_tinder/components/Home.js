import { ImageBackground, Image, StyleSheet, Text, View, Button, Pressable, Dimensions } from 'react-native';

export default function Home({ navigation }) {
  const image = { uri: 'https://www.simplyrecipes.com/thmb/nFtRprjs_Jydr4iKK21PPwgvCVY=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__03__Salad-Mint-Pesto-LEAD-1-f3ced41178a14c5e8904a27daf6dbd6d.jpg' };


  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.overlay} />
      <View style={styles.container}>
      <Image
      style={styles.textLogo}
      source={require('../assets/RecipeLab.png')}
       />
        <Image
      style={styles.logo}
      source={require('../assets/RecipeLabs_logo.png')}
       />
       
       
         <View style={styles.buttons} >
        <Pressable
          onPress={() => {
            navigation.navigate('GetIngredients');
          }}style={styles.button}>
          <Text style={styles.button_text}>Create New Request</Text>
        </Pressable>
        </View>
        <View style={styles.buttons} >
        <Pressable
          onPress={() => {
            navigation.navigate('Tinder');
          }}style={styles.button}>
          <Text style={styles.button_text}>Explore Recipes</Text>
        </Pressable>
        </View>
        <View style={styles.buttons} >
        <Pressable
          onPress={() => {
            navigation.navigate('Favorites');
          }}style={styles.button}>
          <Text style={styles.button_text}>Go to Favorites</Text>
        </Pressable>
        </View>

        <View style={styles.button_container} />
      </View>
    </ImageBackground>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.1,
    paddingHorizontal: 40,
  },
  buttons: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#3ccf63',
  },
  button_container: {
    marginTop: height * 0,
  },
  textLogo: {
width: 300,
height: 150,
paddingBottom: 40,
paddingTop: 0,
  },
  logo: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
 },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 22,
    paddingHorizontal: 22,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#099690',
  },
  button_text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: 'white',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});
