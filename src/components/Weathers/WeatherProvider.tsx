import React, { createContext, ReactNode, useContext, useReducer } from 'react';


interface WeatherProviderProps {
    children:ReactNode,
    initialState:any,
    reducer:any
}


const WeatherState = createContext<any | null>(null)




const WeatherProvider = (props:WeatherProviderProps) => {
    return (
        <WeatherState.Provider value={useReducer(props.reducer,props.initialState)}>
            {props.children}
        </WeatherState.Provider>
    );
};

export default WeatherProvider;



export const useWeatherProvider = () =>{
    const value = useContext(WeatherState);

    if(!value){
        throw new Error('do not use useWeatherProvider')
    }

    return value;
}