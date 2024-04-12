import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { getPokemon } from './api';
import { getPokemonWithDetails, setLoading } from './actions';
import './App.css';

function App() {
  //const [pokemons, setPokemons] = useState([]);

  const pokemons = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading);
  const dispatcher = useDispatch();

  useEffect(()=> {
    const fetchPokemons = async () => {
      dispatcher(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatcher(getPokemonWithDetails(pokemonsRes));
      dispatcher(setLoading(false));
    };

    fetchPokemons();
  },[]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
