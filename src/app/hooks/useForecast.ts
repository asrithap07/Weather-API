'use client'

import {useState, useEffect, ChangeEvent} from 'react'
import { optionType, forecastType } from '../../../new-types'

const useForecast = () => {
    const [term, setTerm] = useState<string>('')
    const [city, setCity] = useState<optionType | null>(null)
    const [options, setOptions] = useState<[]>([])
  const[forecast, setForecast] = useState<forecastType | null>(null)
  
  //const test = `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`
    const getSearchOptions = (value: string) => {
      fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setOptions(data))
      .catch((e) => console.log({e}))
    }
    
    //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
  
    const onSubmit = () => {
        if (!city) return
          getForecast(city)
      }

  const getForecast = (city: optionType) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        const forecastData = {
            ...data.city,
            list: data.list.slice(0, 16),
        }
        setForecast(forecastData)
    })
    .catch((e) => console.log({e}))
  }
  
    const onOptionSelect = (option: optionType) => {
    setCity(option)
  }
  
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setTerm(value)


    if (value === '') return 
        getSearchOptions(value)
    }

  useEffect(() => {
  
  if(city) {
    setTerm(city.name)
    setOptions([])
  }
  
  }, [city])
 
  return {
    term, options, forecast, onInputChange, onOptionSelect, onSubmit,
}

}


export default useForecast
