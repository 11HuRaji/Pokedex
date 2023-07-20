import { usePokedex } from "../../contexts/usePokedex";

function Pokecard({ name, image, type }) {
  const { setPokeData } = usePokedex();

  return (
    <>
      <div className="pokecard" role="figure">
        <h2 className="pokemon-name">{name}</h2>
        <img src={image} alt={`An image of ${name}`} />
        <div className="pokemon-type">Type: {type}</div>
        <button
          onClick={() =>
            setPokeData((state) =>
              state.filter((pokemon) => pokemon.name !== name)
            )
          }
        >
          Remove
        </button>
      </div>
    </>
  );
}

export default Pokecard;
