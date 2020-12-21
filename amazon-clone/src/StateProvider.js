import React, {createContext, useContext, useReducer} from 'react';

//prepares the datalayer
export const StateContext = createContext();

//provide the datalayer
export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value={ useReducer(reducer, initialState)}>
        {children}
        </StateContext.Provider>
);

//pull information from datalayer
export const useStateValue = ()=> useContext(StateContext);
