import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const PokemonCard = ({ name, number, image, abilities }) => {
  return (
    <Card
      title={"Pokemon #" + number + ": " + name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description={listAbilities(abilities)} />
    </Card>
  );
};

const listAbilities = (abilities) => {
    return abilities.map(item => item.ability.name).join(', ');
};

export default PokemonCard;