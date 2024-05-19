import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
    pokemons: [],
    pokemonsFiltered: []
};

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch}) => {
        dispatch(setLoading(true));
        const pokemonsRes = await getPokemon();
        const pokemonDetailed = await Promise.all(
            pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
        );
        dispatch(setPokemons(pokemonDetailed));
        dispatch(setLoading(false));
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
            state.pokemonsFiltered = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex(
                (pokemon) => {
                    return pokemon.id === action.payload.pokemonId;
                });

            const currentFileredtPokemonIndex = state.pokemonsFiltered.findIndex(
                (pokemon) => {
                    return pokemon.id === action.payload.pokemonId;
                });
            if(currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;
                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            } 
            if(currentFileredtPokemonIndex >= 0) {
                const isFavorite = state.pokemonsFiltered[currentFileredtPokemonIndex].favorite;
                state.pokemonsFiltered[currentFileredtPokemonIndex].favorite = !isFavorite;
            } 
        },
        setFilter: (state, action) => {
            const pokemonsFiltered = state.pokemons.filter(
                pokemon => pokemon.name.includes(action.payload.toLowerCase())
            );
            state.pokemonsFiltered = pokemonsFiltered;
        }
    },
});

export const { setFavorite, setPokemons, setFilter } = dataSlice.actions;
console.log("🚀 ~ file: dataSlice.js:29 ~ dataSlice:", dataSlice);

export default dataSlice.reducer;