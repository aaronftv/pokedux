import { combineReducers } from 'redux';
import dataReducer from '../features/dataSlice';
import uiReducer from '../features/uiSlice';

const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer
});

export default rootReducer;