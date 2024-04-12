//Reducer manager
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = {
    pokemons: [],
    loading: false,
    favorite: false,
};

export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMONS:
            return { ...state, pokemons: action.payload };
        case SET_FAVORITE:
            const newPokemonList = [...state.pokemons];
            const currentPokemonIndex = newPokemonList.findIndex((pokemon) => {
              return pokemon.id === action.payload.pokemonId;
            });
            if(currentPokemonIndex < 0) {
                return state;
            }
            newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
            return { ...state, pokemons: newPokemonList };
        case SET_LOADING:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}
