import { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = (props) => {
  const [xp, setXP] = useState(0.1);
  const [level, setLevel] = useState(1);

  const [all_recipes, setAll] = useState({
    ButterChicken: {ingredients:['Chicken','Rice','Yogurt','Spices'],description:'idk yet',difficulty:2,completed:false,image:"https://www.danishfoodlovers.com/wp-content/uploads/2022/09/Butter-chicken-3.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1"},
    Plov: {ingredients:['Beef','Rice','Carrots','Garlic'],description:'idk yet',difficulty:3,completed:false,image:"https://3.bp.blogspot.com/-ifXTd_QKsrU/VHvGNKhpB2I/AAAAAAAADRg/U0FAG3qKa0U/s1600/1071258.jpg"},
    MacAndChesse: {ingredients:['Macaroni','Cheese'],description:'idk yet',difficulty:1,completed:false,image:"https://www.tastingtable.com/img/gallery/the-15-best-additions-to-mac-and-cheese/l-intro-1670687967.jpg"},
    Pizza: {ingredients:['Chicken','Rice','Yogurt','Spices'],description:'idk yet',difficulty:2,completed:false,image:"https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8&w=1000&q=80"},
    Cheeseburger: {ingredients:['Beef','Cheese','Tomato','Lettuce','Onion','Bread'],description:'idk yet',difficulty:2,completed:false,image:"https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/4NIX5ZMIWJEMPFNYBF3HNG575I.png"},
    ChickenAndRice:{ingredients:['Chicken','Rice'],description:'idk yet',difficulty:1,completed:false,image:"https://www.cookingclassy.com/wp-content/uploads/2020/01/chicken-and-rice-15.jpg"}
  });
  const [sorted_recipes, setSorted] = useState({});
  const [fav_recipes, setFav] = useState({});
  const [current_recipe,setCurrent] = useState({});


  // Function to add a new key-value pair to the object
  const addFav = (key, value) => {
    setFav({ ...fav_recipes, [key]: value });
  }

  // Function to remove a key-value pair from the object
  const removeFav = (key) => {
    const fav_recipes = { ...fav_recipes };
    delete fav_recipes[key];
    setFav(fav_recipes);
  }

   // Function to add a new key-value pair to the object
   const addSorted = (key, value) => {
    setSorted({ ...sorted_recipes, [key]: value });
  }

  // Function to remove a key-value pair from the object
  const removeSorted = (key) => {
    const sorted_recipes = { ...sorted_recipes };
    delete sorted_recipes[key];
    setSorted(fav_recipes);
  }


  const contextValue = { xp, setXP, level, setLevel, all_recipes, setAll,sorted_recipes, addSorted,removeSorted,fav_recipes, addFav,removeFav,current_recipe,setCurrent };
  
  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
};