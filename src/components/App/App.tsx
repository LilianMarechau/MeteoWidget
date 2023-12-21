import { useEffect, useState } from 'react';
import Widget from '../Widget/Widget';
import axios from 'axios';
import './App.css';

function App() {

  const fakeData = { 
    nomVille: "Paris",
    temperature: {
      temp: 12,
      ressenti: 10,
      humidité: 80,
    },
    description: "pas très beau",
    icon: "50d"
  };
  const [ cityWeather, setCityWeather ] = useState<null | Promise<any>>(null);

  const fetchData = async (city: string) => {
    try {
        const APIKey = import.meta.env.VITE_OPENWEATHER_API_URL;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=${APIKey}`)
        console.log(response);
        const dataClean = response.data.map((array: {
          name: string,
          main: {
            temp: number,
            feels_like: number,
            humidity: number,
          },
          weather: {
            icon: string,
            description: string,
          }[],
        }) => {
          ({
            nomVille: array.name,
            temperature: {
              temp: array.main.temp,
              ressenti: array.main.feels_like,
              humidité: array.main.humidity,
            },
            description: array.weather[0].description,
            icon: array.weather[0].icon,
          })
        })
        return dataClean;
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    const dataClean = fetchData('Paris');
    setCityWeather(dataClean);
  }, [])

  return (
    <div className='container'>
      <h1>Widget Météo</h1>
      <Widget data={cityWeather} />
    </div>
  )
}

export default App
