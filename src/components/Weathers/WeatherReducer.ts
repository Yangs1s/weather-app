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
    searchLocation:null,
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
                searchLocation:action.searchLocation,
           } 
        
        default:
            break;
    }
}

export default reducer;