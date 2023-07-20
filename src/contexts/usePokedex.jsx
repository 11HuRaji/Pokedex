import React, { createContext, useContext, useState } from "react";
import presetData from "../data/pokedata.json";

const PokedexContext = createContext();

export function PokedexProvider({ children }) {
  const [pokeData, setPokeData] = useState(presetData);
  return (
    <PokedexContext.Provider value={{ pokeData, setPokeData }}>
      {children}
    </PokedexContext.Provider>
  );
}

export const usePokedex = () => useContext(PokedexContext);
