import { usePokedex } from "../../contexts/usePokedex";

function PokecardAll(props) {
  const { name, image, type } = props;
  const { pokeData, setPokeData } = usePokedex();
  return (
    <>
      <div className="pokecard" role="figure">
        <h2 className="pokemon-name">{name}</h2>
        <img src={image} alt={`An image of ${name}`} />
        <div className="pokemon-type">Type: {type}</div>
        <button
          onClick={() => {
            if (pokeData.find((pokemon) => pokemon.name === name)) return;
            setPokeData((state) => [...state, props]);
          }}
        >
          Add to Pokedex
        </button>
      </div>
    </>
  );
}

export default PokecardAll;
