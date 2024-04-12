import PokemonCard from "./PokemonCard";
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
    return(
        <div className='PokemonList'>
            {pokemons.map((pokemon) => {
                return (
                  <PokemonCard
                    name={pokemon.name}
                    key={pokemon.id}
                    number={pokemon.id}
                    image={pokemon.sprites.front_default}
                    abilities={pokemon.abilities}
                    types={pokemon.types}
                    favorite={pokemon.favorite}
                  />
                );
            })}
        </div>
    );
};

PokemonList.defaultProps ={
    pokemons: Array(10).fill(''),
};

export default PokemonList;