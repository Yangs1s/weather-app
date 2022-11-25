import styled from "@emotion/styled";
import { useWeatherProvider } from "./Weathers/WeatherProvider";
const Footer = () => {
    const [{weathers},dispatch] = useWeatherProvider();
    return (
        <Container>
            <div className="foot_wrapper">
                <div className="item feel">
                    <span className="feelsLike">{(weathers.feelsLike-273.15).toFixed(1)}℃</span>
                    <span>Feel-Like</span>
                </div>
                <div className="item humi">
                    <span className="humidity">{(weathers.humidity)}%</span>
                    <span>Humidity</span>
                </div>
                <div className="item">
                    <span className="windSpeed">{weathers.windSpeed}</span>
                    <span>Wind-Speed</span>
                </div>
            </div>
        </Container>
    );
};

export default Footer;

const Container = styled.footer`
    display: flex;
    bottom: 0;
    opacity: 0.95;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
    font-weight:bold;
    .foot_wrapper{
        display: flex;  
        color:#fff;
        background: #9a9999;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-bottom: 10px;
        .item{
            display: flex;
            flex-direction: column;
            padding: 1.16rem 1.85rem;
            font-size: 1.3em;

            span{
                text-align: center;
                margin-bottom: 5px;
            }
        }

        .feel,
        .humi{
            border-right: 2px solid #8a8a8a;
        }
        .humidity,.feelsLike,.windSpeed{
            font-weight: 400;
            font-size: 1.8em;
        }
    }
`