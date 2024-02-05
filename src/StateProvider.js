//setup data layer
// to track the basket

import { createContext, useContext, useReducer } from "react";


//Data Layer
export const StateContext=createContext();


//Provider

export const StateProvider=({reducer,initialState,children})=>(
  
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    
)

//inside component

export const useStateValue=()=>useContext(StateContext)