import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MyPokedex, AllPokemon } from "./pages";
import { PokedexProvider } from "./contexts/usePokedex";
import { Nav } from "./layouts";
import "./App.css";

function App() {
  return (
    <PokedexProvider>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<AllPokemon />} />
          <Route path="mypokedex" element={<MyPokedex />} />
        </Route>
      </Routes>
    </PokedexProvider>
  );
}

export default App;
