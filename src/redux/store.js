import { createStore } from 'redux';

var defaultState = { ip: "192.168.1.230" };

const reducer = (state = defaultState, action) => {
    if (action.type === 'SET')
        return { ip: action.ip };
    return state;
}
const store = createStore(reducer);
export default store;