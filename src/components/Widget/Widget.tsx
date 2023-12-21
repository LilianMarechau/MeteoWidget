import IWeather from '../../@types/IWeather';
import './Widget.css';

interface IWidget {
    data: IWeather[],
}

function Widget({data}: IWidget) {
    // console.log(data);
    return (
        <div>
        {data && data.map((city: IWeather) => (
            <div className="widget__container" key={city.id}>
                <div className='widget__header'>
                    <h2>{city.name}</h2>
                    <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="représentation de la météo" />
                    <p>{Math.round(city.main.temp)}°C</p>
                    <div className="widget__temp">
                        <p><span>↑</span> {Math.round(city.main.temp_max)}°</p>
                        <p><span>↓</span> {Math.round(city.main.temp_min)}°</p>
                    </div>
                </div>
                <em>{city.weather[0].description}</em>
                <p>Ressenti <span>{city.main.feels_like}°C</span></p>
                <p>Humidité <span>{city.main.humidity}%</span></p>
            </div>
        ))}
        </div>  
    )
}

export default Widget;
