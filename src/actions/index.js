//Action creator
import { getPokemonDetails } from "../api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export const getPokemonWithDetails = (pokemons = []) => async (dispatcher) => {
  const pokemonDetailed = await Promise.all(
    pokemons.map((pokemon) => getPokemonDetails(pokemon))
  );

  dispatcher(setPokemons(pokemonDetailed));
};
