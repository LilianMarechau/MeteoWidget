import { useEffect, useState } from "react";
import IWeather from "../../@types/IWeather";

interface IWIdgetProp {
    city: IWeather,
}

function Widget({city}: IWIdgetProp) {

    const [time, setTime] = useState<string>('');
    const [timezone, setTimezone] = useState<number>(city.timezone);

    useEffect(() => {
        // Utilisation de setInterval pour mettre à jour l'heure chaque seconde
        const intervalId = setInterval(() => {
            let date = new Date();
            date.setSeconds(date.getSeconds() + timezone + 1);

            const heure = date.toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });

            setTime(heure);
        }, 1000);

        // Nettoyer l'intervalle lors du démontage du composant
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="widget__container" key={city.id}>
                <div className='widget__header'>
                    <div className="widget__section">
                        <h2>{city.name} <span className='hour'>{time}</span></h2>
                        <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="représentation de la météo" />
                    </div>
                    <div className="widget__section">
                        <p>{Math.round(city.main.temp)}°C</p>
                        <div className="widget__temp">
                            <p><span>↑</span> {Math.round(city.main.temp_max)}°</p>
                            <p><span>↓</span> {Math.round(city.main.temp_min)}°</p>
                        </div>
                    </div>
                </div>
                <em>{city.weather[0].description}</em>
                <p>Ressenti <span>{Math.round(city.main.feels_like)}°C</span></p>
                <p>Humidité <span>{Math.round(city.main.humidity)}%</span></p>
            </div>
    )
}

export default Widget;