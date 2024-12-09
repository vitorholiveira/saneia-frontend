import React, { createContext, useEffect, useReducer } from 'react';
import { actions } from './actions';

const initialState = {
    login: false,
}

const store = createContext(initialState);
const { Provider } = store;

const descriptionReducer = (state, action) => {
    switch (action.type) {
        case actions.SET_LOGIN:
            console.log("actions.SET_LOGIN", action.value);
            return { ...state, login: action.value };

        default:
            return state;
    };
}

const StateProvider = ({ children }) => {

    const [state, dispatch] = useReducer(descriptionReducer, {}, () => {
        const localLogin = localStorage.getItem('login')

        console.log('state provider log')
        console.log(localLogin)
        console.log(JSON.stringify(initialState))

        if(!localLogin)
            return initialState;

        const newState = {
            login: JSON.parse(localLogin),
        };
        return newState;
    });

    useEffect(() => {
        localStorage.setItem('login', JSON.stringify(state.login));
    }, [state.localLogin]);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider, initialState }
