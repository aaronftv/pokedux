import { combineReducers } from 'redux';
import dataReducer from '../features/dataSlice';

const rootReducer = combineReducers({
    data: dataReducer,
});

export default rootReducer;