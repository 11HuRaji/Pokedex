import { useEffect, useState } from "react";

function PokemonForm({ pokeData, setPokeData }) {
  const [pokemonName, setPokemonName] = useState("");
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        setPokeData([
          ...pokeData,
          {
            name: data.name,
            image: data.sprites.front_default,
            type: data.types[0].type.name,
          },
        ]);
      });
  }, [pokemonName]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPokemonName(inputText);
          setInputText("");
        }}
      >
        <input
          type="text"
          name="pokemonName"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Add To Pokedex</button>
      </form>
    </>
  );
}

export default PokemonForm;
