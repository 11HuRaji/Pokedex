import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import { expect, describe, it, vi, beforeEach, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

import Pokecard from ".";

describe("Pokecard component", () => {
  afterEach(() => {
    cleanup();
  });

  it("display a card looking element with a pokemon's corresponding name, image and type", () => {
    render(
      <Pokecard
        name={"Charmander"}
        imageURL={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        }
        type={"fire"}
      />
    );

    const card = screen.getByRole("figure");
    const name = screen.getByRole("heading");
    const image = screen.getByRole("img");

    expect(card).toBeInTheDocument();
    expect(name).toHaveTextContent("Charmander");
    expect(image).toBeInTheDocument();
  });
});
