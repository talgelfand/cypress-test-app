import {INC, DEC, RES} from './types';

const initialState = {
    value: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return {
                ...state,
                value: state.value + 1
            }
        case DEC:
            return {
                ...state,
                value: state.value - 1
            }
        case RES:
            return {
                ...state,
                value: 0
            }
        default: 
            return state;
    }
}

export default reducer;