import React from "react";
import { Pokedex, PokemonForm } from "./../../components";
import { usePokedex } from "../../contexts/usePokedex";

export default function MyPokedex() {
  const { pokeData, setPokeData } = usePokedex();
  return (
    <>
      <h1>Pokedex</h1>
      <PokemonForm pokeData={pokeData} setPokeData={setPokeData} />
      <Pokedex pokeData={pokeData} />
    </>
  );
}
