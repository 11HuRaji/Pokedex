import React from "react";

export default function PokemonPagination({ setPage }) {
  const arr = Array(50).fill(0);

  return (
    <div className="pokemon-pages">
      {arr.map((_, i) => {
        i = i + 1;
        return (
          <button key={i} onClick={() => setPage(i * 20)}>
            {i * 20 - 19}-{i * 20}
          </button>
        );
      })}
    </div>
  );
}
