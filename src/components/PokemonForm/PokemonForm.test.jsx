import React, { useState } from "react";
import { screen, render, cleanup } from "@testing-library/react";
import { expect, beforeEach, afterEach, describe, it, vi } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import userEvent from "@testing-library/user-event";

expect.extend(matchers);

import PokemonForm from ".";
import { Pokedex } from "..";
import axios from "axios";

describe("PokemonForm component", () => {
  beforeEach(() => {
    const WrapperComp = () => {
      const [pokeData, setPokeData] = useState([]);
      return (
        <>
          <PokemonForm {...{ pokeData, setPokeData }} />
          <Pokedex pokeData={pokeData} />
        </>
      );
    };
    render(<WrapperComp />);
  });

  afterEach(() => {
    cleanup();
  });

  it("returns a input element and submit button", () => {
    const input = screen.getByTestId("input");
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("adds relevant pokemon information from an api to a state object when the pokemon name has been submitted in a form", async () => {
    await vi.spyOn(axios, "get").mockResolvedValueOnce({
      data: {
        name: "bulbasaur",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
        types: [
          {
            type: {
              name: "grass",
            },
          },
        ],
      },
    });

    const input = screen.getByTestId("input");
    const button = screen.getByRole("button");

    await userEvent.type(input, "Bulbasaur");
    await userEvent.click(button);

    const image = await screen.findByRole("img");
    expect(image).toBeInTheDocument();
  });
});
