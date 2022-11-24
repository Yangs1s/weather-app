import styled from '@emotion/styled'
import {BsFillSunFill} from 'react-icons/bs'
import { useEffect } from "react";
import axios from 'axios';
import { WeatherType } from './Weathers/WeatherReducer';
import { useWeatherProvider } from './Weathers/WeatherProvider';
import { reducerCase } from './Weathers/Constants';



const API_KEY = process.env.REACT_APP_API_KEY
const CITY_NAME = "Busan"


const Weather = () => {
    const [{weathers},dispatch] = useWeatherProvider();

    useEffect(()=>{
        const getWeather = async() =>{
          const response = await  axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`)    
                    const data  = response.data;
                    console.log(data)
                    const weathers = {
                        id:data.id,
                        temperature:data.main.temp,
                        cityName:data.name,
                        status:data.weather[0].main,
                        humidity:data.main.humidity,
                        feelsLike:data.main.feels_like,
                        windSpeed:data.wind.speed
                    }
                    dispatch({type:reducerCase.SET_WEATHER,weathers})
                
        }
        getWeather();
    },[])



    

    return (
        <Container>
            <div className="city_area">
                <span className="city_name">
                    {(weathers.cityName)}
                </span>
            </div>
            <div className="weather_info">
                <div className="weather_status">
                    <div className="weather_icon">
                        <BsFillSunFill/>
                    </div>
                </div>
                <div className="weather_temperture">
                    <p className='temperture'>
                        {(weathers.temperature - 273.15).toFixed(1)}℃
                    </p>
                    <p className='state'>{weathers.status}</p>
                </div>
            </div>
        </Container>
    );
};

export default Weather;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: bold;
    .weather_info{
        display: flex;
        flex-direction: column;
        margin-top: 2em;
        .weather_status{
            display: flex;
            text-align: center;
            .weather_icon{
                font-size: 15em;
            }
        }
        .weather_temperture{
            display: flex;
            text-align: center;
            flex-direction: column;
            .temperture{
                font-size: 5em;
                font-weight: 300;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .state{
                font-size: 3em;
                font-weight: bold;
            }
        }

    }
    .city_area{
        margin: 10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .city_name{
            display: flex;
            font-size:3em;
        }
    }

`