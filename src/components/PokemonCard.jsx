import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const PokemonCard = ({name}) => {
    return (
        <Card
            title ={name}
            cover={<img src='./132.png' alt='Ditto' />}
            extra={<StarOutlined /> }
        >
            <Meta description='fire, magic' />
        </Card>
    );
};

export default PokemonCard;