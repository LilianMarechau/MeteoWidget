import { useEffect, useState } from 'react';
import WidgetList from '../WidgetList/WidgetList';
import axios from 'axios';
import './App.css';
import IWeather from '../../@types/IWeather';
import Input from '../Input/Input';

function App() {

  const [ cityWeather, setCityWeather ] = useState<[] | IWeather[]>([]);
  const [ cityName, setCityName ] = useState('Germonville');

  const fetchData = async () => {
    console.log('fetch')
    try {
        const APIKey = import.meta.env.VITE_OPENWEATHER_API_URL;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=fr&units=metric&appid=${APIKey}`)
        console.log(response);
        const newCityWeather = [...cityWeather, response.data];
        setCityWeather(newCityWeather);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [cityName])

  return (
    <div className='container'>
      <div className='weather'>
        <h1>Météo</h1>
        <Input setCityName={setCityName} />
        <WidgetList data={cityWeather} />
      </div>
    </div>
  )
}

export default App
