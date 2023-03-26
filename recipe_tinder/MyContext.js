import { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = (props) => {
  const [xp, setXP] = useState(0.1);
  const [level, setLevel] = useState(1);

  const [all_recipes, selectAll] = useState({
    ButterChicken: {ingredients:['Chicken','Rice','Yogurt','Spices'],description:'idk yet',difficulty:2},
    Plov: {ingredients:['Beef','Rice','Carrots','Garlic'],description:'idk yet',difficulty:2},
    MacAndChesse: {ingredients:['Macaroni','Cheese'],description:'idk yet',difficulty:2},
    Pizza: {ingredients:['Chicken','Rice','Yogurt','Spices'],description:'idk yet',difficulty:2},
    Cheeseburger: {ingredients:['Beef','Cheese','Tomato','Lettuce','Onion','Bread'],description:'idk yet',difficulty:2},
    ChickenAndRice:{ingredients:['Chicken','Rice'],description:'idk yet',difficulty:1}
  });
  const [sorted_recipes, sortRecipe] = useState({});
  const [fav_recipes, addFav] = useState({});
  const [current_recipe,setCurrent] = useState({});

  const contextValue = { xp, setXP, level, setLevel, all_recipes, selectAll,sorted_recipes, sortRecipe,fav_recipes, addFav,current_recipe,setCurrent };
  
  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
};