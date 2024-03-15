'use client'

//import {ChangeEvent, useEffect, useState} from 'react'
//import React, { Component }  from 'react'
//import { optionType } from './types/optionType'
import Search from './components/search'
import useForecast from './hooks/useForecast'
import Forecast from './components/Forecast'

const App = (): JSX.Element => {
  const {
    term, options, forecast, onInputChange, onOptionSelect, onSubmit
  } = useForecast()
  return (
    <main className="flex justify-center items-center bg-gradient-to-r from-emerald-100 to-sky-200 h-full w-full">
      {forecast ? (
        <Forecast data = {forecast}/>
      ) : (
        <Search 
        term={term} 
        options={options} 
        onInputChange={onInputChange} 
        onOptionSelect={onOptionSelect} 
        onSubmit={onSubmit}
        />
      )
      }
      </main>
  )
}
//46.37
export default App