import { Pokecard } from "..";

function Pokedex({pokeData}) {
  return (
    <>
      <div className="pokedex">
        {pokeData.map((pokeObj) => (
          <Pokecard
            name={pokeObj.name}
            type={pokeObj.type}
            imageURL={pokeObj.image}
          />
        ))}
      </div>
    </>
  );
}

export default Pokedex;
