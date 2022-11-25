
import styled from '@emotion/styled';
import axios from 'axios';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { reducerCase } from './Weathers/Constants';
import { useWeatherProvider } from './Weathers/WeatherProvider';


const API_KEY = process.env.REACT_APP_API_KEY

const Header = () => {
    
    const [{searchLocation},dispatch] = useWeatherProvider();
    console.log(searchLocation)
    const searchCity = async (event:KeyboardEvent) =>{
        event.preventDefault()
        if(event.key === 'Enter'){
        await axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${API_KEY}`)
            .then((response) =>{  
            const data = response.data
            const searchLocation = {
                city:data.name,
            }
            console.log(searchLocation)
            dispatch({type:reducerCase.SET_SEARCH_LOCATION,searchLocation})
        }
            )
              
        }
    }

    const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
        dispatch({type:reducerCase.SET_SEARCH_LOCATION,searchLocation:event.currentTarget.value})
    }
    return (
        <Container>
            <input value={searchLocation} type="text" onChange={handleChange} placeholder='Search Location' onKeyPress={searchCity}/>
        </Container>
    );
};

export default Header;

const Container = styled.header`
    margin: 0 auto;
    display: flex;
    input{
        width: 20em;
        border-radius: 20px;
        padding: 10px;
        margin: 2em;
        opacity: 0.9;

        color: #000;
        background: #d2d2d2;
    }
`