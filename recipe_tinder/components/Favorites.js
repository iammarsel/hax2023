import { SafeAreaView,StyleSheet, Text, View,Pressable,Dimensions,ScrollView } from 'react-native';
import React, { useContext } from 'react';
import * as Progress from 'react-native-progress';
import { MyContext } from '../MyContext';
export default function Home({ navigation }) {
    const {level, setLevel,xp,setXP, all_recipes, selectAll,sorted_recipes, sortRecipe,fav_recipes, addFav,current_recipe,setCurrent } = useContext(MyContext)
    fav_keys = Object.keys(all_recipes);

    difficulties = {
      1:'Easy',
      2:'Medium',
      3:'Hard'
    }

    const renderFavRecipes = () => {
      return fav_keys.map((key) => {
        return (
        
        <View style={styles.recipe}>
        <Text style={styles.title2}>{key}</Text>
        <Text style={styles.difficulty}>{difficulties[all_recipes[key].difficulty]}</Text>
        <Pressable alignSelf="flex-end" onPress={() => {
    setCurrent(key)
    navigation.navigate("Details")
  }} style={styles.button}>
        <Text style={styles.button_text}>Details</Text>
        </Pressable>
        </View>
     );
    });
    }
    return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Recipes</Text>
      <Progress.Bar progress={xp} width={300} height={10} color={'#3ccf63'} />
      <Text style={styles.title2}>{xp*100}% XP | Level {level}</Text>
        <ScrollView>
        {renderFavRecipes()}
        </ScrollView>
      <View style={styles.bottomView}>
          <Pressable onPress={() => {
        navigation.navigate("Home")
      }} style={styles.button}>
        <Text style={styles.button_text}>Home</Text>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("Tinder")
      }} style={styles.button}>
        <Text style={styles.button_text}>Explore</Text>
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate("Favorites")
      }} style={styles.buttona}>
        <Text style={styles.button_text}>Favorites</Text>
      </Pressable>
      </View>
    </View>
    </SafeAreaView>
  );
}
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height*0.1,
    alignItems: 'center',
    paddingHorizontal: 0
  },
  progressBar: {
    height: 20,
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
  },
  bottomView: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  title: {
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#DF5F1C',
  },
  recipe:{
    width: '100%',
    flex:1,
    borderRadius: 10,
    height: 70,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  difficulty:{
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    paddingHorizontal:10,
    letterSpacing: 0.25,
    color: '#f58142',
  },    
  title2: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#3ccf63',
  },
  button_container: {
    marginTop: height*0.6,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginVertical: 10,
    marginHorizontal:10,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#3ccf63'
  },
  buttona: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 10,
    paddingHorizontal: 25,
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
    alignItems: 'center',
    justifyContent: 'center',
  }
});
