import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { getPokemon } from './api';
import { setPokemons as setPokemonsAction } from './actions';
import './App.css';

function App({pokemons, setPokemons}) {
  console.log("🚀 ~ file: App.js:12 ~ App ~ pokemons:", pokemons);
  //const [pokemons, setPokemons] = useState([]);
  useEffect(()=> {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };
    fetchPokemons();
    //fetchPokemons(pokemons);
  },[]);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' /> 
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

//These 2 vars below are required to connect our component to Redux, names are by convention
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToPros = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value))
});

//This below is also required for Redux integration
export default connect(mapStateToProps, mapDispatchToPros)(App);
