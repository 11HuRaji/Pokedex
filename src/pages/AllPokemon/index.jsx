import { useEffect, useState } from "react";
import { PokemonPagination } from "../../components";
import axios from "axios";
import { PokecardAll } from "../../components";

function AllPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(20);

  useEffect(() => {
    const getAllPokemon = async () => {
      try {
        const pokeArr = [];
        for (let i = page - 19; i < page; i++) {
          const { data, status } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${i}`
          );

          if (status === 404) break;

          pokeArr.push({
            name: data?.name,
            image: data.sprites?.front_default,
            type: data?.types?.[0]?.type?.name,
          });
        }

        setPokemon(pokeArr);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPokemon();
  }, [page]);

  return (
    pokemon && (
      <>
        <div className="pokedex">
          {pokemon.map((pokeObj) => (
            <PokecardAll
              key={pokeObj.name}
              name={pokeObj.name}
              type={pokeObj.type}
              image={pokeObj.image}
            />
          ))}
        </div>
        <PokemonPagination setPage={setPage} />
      </>
    )
  );
}

export default AllPokemon;
