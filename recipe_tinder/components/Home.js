import { ImageBackground, Image, StyleSheet, Text, View, Button, Pressable, Dimensions } from 'react-native';

export default function Home({ navigation }) {
  const image = { uri: 'https://i.ibb.co/rpkJjNp/labbg.png' };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
        <View style={styles.buttons}>
          <Image
            style={styles.logo}
            source={require('../assets/logo.png')}
          />
          <Text style={styles.title}> 
            Welcome to RecipeLab!
          </Text>
          <Text style={styles.title2}>
            Connect with RecipeLab for your personalized recipe to get inspired in the kitchen.
          </Text>
<View style={styles.extra}>
          <Pressable
            onPress={() => {
              navigation.navigate('Tinder');
            }}
            style={styles.button}>
            <Text style={styles.button_text}>Explore Recipes</Text>
          </Pressable>
          </View>

<View style={styles.extra}>
          <Pressable
            onPress={() => {
              navigation.navigate('GetIngredients');
            }}
            style={styles.button}>
            <Text style={styles.button_text}>Create New Request</Text>
          </Pressable>
          </View>

<View style={styles.extra}>
          <Pressable
            onPress={() => {
              navigation.navigate('Favorites');
            }}
            style={styles.button}>
            <Text style={styles.button_text}>Go to Favorites</Text>
          </Pressable>
          </View>
        </View>
    </View>
      </ImageBackground>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  logo: {
    width: 170,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  extra: {
    paddingVertical: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingTop: height * 0.1,
  },
  buttons: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  textLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 100,
    paddingBottom: 40,
    color: '#3ccf63',
 },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 50,
    elevation: 3,
    width: '110%',
    borderColor:  '#3ccf63',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 50,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#000000',
  },

  title2: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: 0.5,
    color: '#120000',
  },
  button_text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: '#3ccf63',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
