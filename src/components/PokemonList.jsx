import PokemonCard from "./PokemonCard";
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
    //console.log("🚀 ~ file: PokemonList.jsx:5 ~ PokemonList ~ pokemons:", pokemons);
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