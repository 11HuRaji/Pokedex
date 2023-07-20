import { Pokecard } from "..";

function Pokedex({pokeData}) {
  return (
    <>
      <div className="pokedex">
        {pokeData.map((pokeObj) => (
          <Pokecard
            key={pokeObj.name}
            name={pokeObj.name}
            type={pokeObj.type}
            image={pokeObj.image}
          />
        ))}
      </div>
    </>
  );
}

export default Pokedex;
