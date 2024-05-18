import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import StarButton from './StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../features/dataSlice';

const PokemonCard = ({ name, number, image, abilities, types, favorite }) => {
  const dispatcher = useDispatch();
  const typesString = types.map(elem => elem.type.name).join(', ');
  const handleOnFavorite = () => {
    dispatcher(setFavorite({ pokemonId: number }));
  };

  return (
    <Card
      title={"Pokemon #" + number + ": " + name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={ handleOnFavorite } />}
    >
      <Meta description={'Type(s): ' + typesString} />
      <Meta description={'Abilities: ' + listAbilities(abilities)} />
    </Card>
  );
};

const listAbilities = (abilities) => {
    return abilities.map(item => item.ability.name).join(', ');
};

export default PokemonCard;