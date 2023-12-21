import IWeather from '../../@types/IWeather';
import './Widget.css';

interface IWidget {
    data: IWeather,
}

function Widget({data}: IWidget) {
    // console.log(data);    
    return (
        <div className="widget__container">
            <div className='widget__header'>
                <h2>{data.nomVille}</h2>
                <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="représentation de la météo" />
            </div>
            <p>{data.description}</p>
            <p>Température <span>{data.temperature.temp}°C</span></p>
            <p>Ressenti <span>{data.temperature.ressenti}°C</span></p>
            <p>Humidité <span>{data.temperature.humidité}%</span></p>
            
        </div>
    )
}

export default Widget;