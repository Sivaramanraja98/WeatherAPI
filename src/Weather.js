import React from 'react'

const Weather = ({data}) => {
  return (
    <div className='container'>
      {data && (
        <div className='weathercontainer'>
          <h3 className='city'>City : {data.name}, {data.sys.country}</h3>
          <h2 className='temp'>Temp : {data.main.temp} °C</h2>
          <h3 className='humid'>Humidity : {data.main.humidity} %</h3>
          <h5 className='weather'>Weather : {data.weather[0]["description"]}</h5>
        </div>
      )}
      </div>
  )
}

export default Weather