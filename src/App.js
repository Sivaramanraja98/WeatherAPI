import React, { useState } from 'react';
import Axios from 'axios';
import './index.css';
import Form from './Form';
import Header from './Header';
import Weather from './Weather';

const App = () => {

  const [ city , setCity ] = useState('');
  const [ data,setData ] = useState();

  const fetchData = async () => {
    try {
        const res =await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21e445b998eb68d1e0b64bdc2ad4d272`);
        setData(res.data)
        console.log(res.data)
    } catch (error) {
        alert('Enter the city name correctly')
    }
  };

  return (
    <div className='app'>
      <Header/>
      <Form 
        city = {city}
        setCity = {setCity}
        fetchData={fetchData}
      />
      <Weather data={data}/>
    </div>
  )
};

export default App;