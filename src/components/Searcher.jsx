import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/dataSlice';

const Searcher = () => {
  const dispatcher = useDispatch();
  const handleOnChange = (e) => {
    dispatcher(setFilter(e.target.value));
  }
    return (
      <Input.Search 
      placeholder="Search..." 
      onChange={handleOnChange}
      style={{ marginBottom: 12, width: '100%'}} />
    );
};

export default Searcher;