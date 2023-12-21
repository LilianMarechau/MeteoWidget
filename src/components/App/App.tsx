import './App.css';
import { useEffect, useState } from 'react';
import Widget from '../Widget/Widget';
import axios from 'axios';

function App() {

  const [ cityWeather, setCityWeather ] = useState();

  const fetchData = async (city: string) => {
    try {
        const APIKey = '99f72125c22ae79b7cd3e078878a2627';
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=${APIKey}`)
        // console.log(response);
        setCityWeather(response.data);
        
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    fetchData('paris');
  }, [])

  return (
    <div className='container'>
      <h1>Widget Météo</h1>
      <Widget data={cityWeather} />
    </div>
  )
}

export default App
