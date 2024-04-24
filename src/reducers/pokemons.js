//Reducer manager
import { fromJS } from "immutable";
import { SET_FAVORITE, SET_POKEMONS } from "../actions/types";

const initialState = fromJS({
    pokemons: [],
});

export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMONS:
            //USING Spread Operators
            //return { ...state, pokemons: action.payload };
            //USING immutable library
            return state.setIn(['pokemons'], fromJS(action.payload));
        case SET_FAVORITE:
            //USING Spread Operators
            //const newPokemonList = [...state.pokemons];
            // const currentPokemonIndex = newPokemonList.findIndex((pokemon) => {
            //   return pokemon.id === action.payload.pokemonId;
            // });
            //USING immutable library
            const currentPokemonIndex = state.get('pokemons').findIndex((pokemon) => {
                return pokemon.get('id') === action.payload.pokemonId;
              });

            if(currentPokemonIndex < 0) {
                return state;
            }
             //USING Spread Operators
            //newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
            //return { ...state, pokemons: newPokemonList };
            //Alternative
            //const isFavorite = state.get('pokemons').get(currentPokemonIndex).get('favorite');
            //USING immutable library
            const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite']);
            return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);
        default:
            return state;
    }
}
