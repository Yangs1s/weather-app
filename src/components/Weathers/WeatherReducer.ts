import { reducerCase } from "./Constants"

export type WeatherType ={
        id:number,
        temperature:number,
        cityName:string,
        status:string
}


export type WeatherStateType = {
    weathers:WeatherType[]
}

export const initialState = {
    weathers:[],
    location:'seoul'
}


const reducer = (state:WeatherStateType,action:any) =>{
    switch (action.type) {
        case reducerCase.SET_WEATHER:
           return{
                ...state,
                weathers:action.weathers
           } 
        
        case reducerCase.SET_SEARCH_LOCATION:
           return{
                ...state,
                location:action.location,
           } 
        
        default:
            return state;
    }
}

export default reducer;