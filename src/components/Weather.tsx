import styled from '@emotion/styled'
import { useEffect } from "react";
import axios from 'axios';
import { useWeatherProvider } from './Weathers/WeatherProvider';
import { reducerCase } from './Weathers/Constants';



const API_KEY = process.env.REACT_APP_API_KEY



const Weather = () => {
    const [{weathers,location},dispatch] = useWeatherProvider();

    useEffect(()=>{
        const getWeather = async() =>{
                   const response = await  axios
                    .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
                        const data  = response.data;
                        console.log(data)
                        const weathers = {
                            id:data.id,
                            temperature:data.main.temp,
                            maxTemp:data.main.temp_max,
                            minTemp:data.main.temp_min,
                            cityName:data.name,
                            status:data.weather[0].main,
                            humidity:data.main.humidity,
                            feelsLike:data.main.feels_like,
                            windSpeed:data.wind.speed,
                            icon:data.weather[0].icon
                        }
                        console.log(location)
                        dispatch({type:reducerCase.SET_WEATHER,weathers})
                        dispatch({type:reducerCase.SET_SEARCH_LOCATION,location:weathers.cityName})
               } 

        getWeather();
    },[location,dispatch])
    

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
                        <img src={`http://openweathermap.org/img/wn/${weathers.icon}.png`} alt="weathercondition" />
                    </div>
                </div>
                <div className="weather_temperture">
                    <p className='temperture'>
                        {(weathers.temperature - 273.15).toFixed(1)}℃
                    </p>
                    <p className='state'>{weathers.status}</p>
                </div>
            </div>
            <div className="max_min_temp">
                <div className="max_temp"><b>MAX:</b> {(weathers.maxTemp -273.15).toFixed(1)}℃</div>
                <div className="min_temp"><b>MIN:</b> {(weathers.minTemp -273.15).toFixed(1)}℃</div>
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
            justify-content: center;
            .weather_icon{
                display: flex;
                img{
                    margin: auto;
                    width: 50px;
                    height: 50px;
                }
            }
        }
        .weather_temperture{
            display: flex;
            text-align: center;
            flex-direction: column;
            margin-top: 3em;
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
    .max_min_temp{
        display: flex;
        justify-content: center;
        div{
            margin: 10px;
            b{
                font-weight: bold;
                font-size: 20px;
            }
        }
    }
`