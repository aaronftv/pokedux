//Reducer manager
import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";

const initialState = fromJS({
    loading: false,
});

export const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOADING:
            //USING Spread Operators
            //return { ...state, loading: action.payload };
            //USING immutable library
            return state.setIn(['loading'], action.payload);
        default:
            return state;
    }
}

