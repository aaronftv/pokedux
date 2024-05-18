import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
    
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex(
                (pokemon) => {
                    return pokemon.id === action.payload.pokemonId;
                });

            if(currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;
                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            } 
        },
    },
});

export const { setFavorite, setPokemons } = dataSlice.actions;
console.log("🚀 ~ file: dataSlice.js:29 ~ dataSlice:", dataSlice);

export default dataSlice.reducer;