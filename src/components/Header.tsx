
import styled from '@emotion/styled';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { reducerCase } from './Weathers/Constants';
import { useWeatherProvider } from './Weathers/WeatherProvider';


const API_KEY = 'f297a5cf135d14cbc5d2dd7186bbb686'

const Header = () => {
    
    const [{searchLocation},dispatch] = useWeatherProvider();

    const searchCity = (event:KeyboardEvent) =>{
        if(event.key === 'Enter'){
            axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${API_KEY}`)    
            .then((response) =>{
                dispatch({type:reducerCase.SET_SEARCH_LOCATION,searchLocation})
            })
        }
    }

    const handleChange = (event:ChangeEvent) =>{

    }
    return (
        <Container>
            <input type="text" onChange={handleChange} placeholder='Search Location'/>
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