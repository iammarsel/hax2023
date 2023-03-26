import { StyleSheet, Text, View, Button,Pressable,Dimensions } from 'react-native';

export default function Home({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <Pressable onPress={() => {
        navigation.navigate("Tinder")
      }} style={styles.button}>
        <Text style={styles.button_text}>Explore Recipes</Text>
      </Pressable>

      <Pressable onPress={() => {
        navigation.navigate("GetIngredients")
      }} style={styles.button}>
        <Text style={styles.button_text}>Create new Request</Text>
      </Pressable>
      
      <Pressable onPress={() => {
        navigation.navigate("Favorites")
      }} style={styles.button}>
        <Text style={styles.button_text}>Go to Favorites</Text>
      </Pressable>



      <View style={styles.button_container}>
      </View>
    </View>
  );
}
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: height*0.1,
    paddingHorizontal: 40
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#3ccf63',
  },
  button_container: {
    marginTop: height*0.6
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#3ccf63'
  },
  button_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});
