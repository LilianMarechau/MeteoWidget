import IWeather from '../../@types/IWeather';
import './Widget.css';

interface IWidget {
    data: IWeather[],
}

function Widget({data}: IWidget) {
    // console.log(data);
    return (
        <div className="widget__container">
        {data && data.map((city: IWeather) => (
            <div key={city.id}>
                <div className='widget__header'>
                    <h2>{city.name}</h2>
                    <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="représentation de la météo" />
                </div>
                <em>{city.weather[0].description}</em>
                <p>Température <span>{city.main.temp}°C</span></p>
                <p>Ressenti <span>{city.main.feels_like}°C</span></p>
                <p>Humidité <span>{city.main.humidity}%</span></p>
            </div>
        ))}
        </div>  
    )
}

export default Widget;
