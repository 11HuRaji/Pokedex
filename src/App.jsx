import { useState } from "react";
import { Pokedex, PokemonForm } from "./components";
import presetData from "./data/pokedata.json";
import "./App.css";

function App() {
  const [pokeData, setPokeData] = useState(presetData);
  return (
    <>
      <h1>Pokedex</h1>
      <PokemonForm pokeData={pokeData} setPokeData={setPokeData} />
      <Pokedex pokeData={pokeData} />
    </>
  );
}

export default App;
