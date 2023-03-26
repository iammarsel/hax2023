import { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = (props) => {
  const [xp, setXP] = useState(0.1);
  const [level, setLevel] = useState(1);

  const contextValue = { xp, setXP, level, setLevel };
  
  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
};