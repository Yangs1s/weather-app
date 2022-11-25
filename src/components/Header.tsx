
import styled from '@emotion/styled';
import axios from 'axios';
import { ChangeEvent, FormEvent} from 'react';
import { reducerCase } from './Weathers/Constants';
import { useWeatherProvider } from './Weathers/WeatherProvider';


const API_KEY = process.env.REACT_APP_API_KEY

const Header = () => {
    const [{wethers,location},dispatch] = useWeatherProvider();

    const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault()
        dispatch({type:reducerCase.SET_SEARCH_LOCATION,location:event.currentTarget.value})
        console.log(event.target.value)
    }

    const searchCity = async (event:FormEvent) =>{
        event.preventDefault()
        await axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
        .then((response) =>{
            const data = response.data
            console.log(data)
            const location = {
                cityName:data.name
            }
            dispatch({type:reducerCase.SET_SEARCH_LOCATION,location:location.cityName})
        })
        
    }
    

    return (
        <Container>
            <form onSubmit={searchCity}>
            <input value={location.cityName} onChange={handleChange} type="text" placeholder='Search Location'/>
            <button type='submit'>검색</button>
            </form>
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