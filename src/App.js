import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { fetchPokemonsWithDetails } from './features/dataSlice';
import './App.css';

function App() {
  //const [pokemons, setPokemons] = useState([]);
  //shallowEqual is used to avoid making a strict comparison and compare if values changed instead
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual);
  const loading = useSelector(state => state.ui.loading);

  const dispatcher = useDispatch();

  useEffect(()=> {
    dispatcher(fetchPokemonsWithDetails());
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
