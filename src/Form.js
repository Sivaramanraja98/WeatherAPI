import React from 'react'

const Form = ({ city, setCity, fetchData }) => {

    const handlechange = (e) => {
        setCity(e.target.value)
    }

    const handleclick = (e) => {
        e.preventDefault();
        fetchData();
        setCity('');
    }
  return (
    <div className='form-container'>
        <form className='form' onSubmit={handleclick}>
            <input 
                type='text' 
                className='input' 
                placeholder='Enter City Name' 
                value ={city}
                onChange={handlechange}
                />
            <button 
                className='btn'
                type='submit'
            >GET WEATHER</button>
        </form>
    </div>
  )
}

export default Form;