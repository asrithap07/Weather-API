'use client'

//import {ChangeEvent, useEffect, useState} from 'react'
//import React, { Component }  from 'react'
//import { optionType } from './types/optionType'
import {ChangeEvent} from 'react'
import { optionType } from '../../../new-types'

type Props = {
    term: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (option: optionType) => void
    onSubmit: () => void
}
const Search = ({term, options, onInputChange, onOptionSelect, onSubmit,}: Props)/**: JSX.Element*/ => {


  return (
    <main className="flex justify-center items-center bg-gradient-to-r from-emerald-100 to-sky-200 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:pix-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-blue-900">
        <h1 className="text-4xl font-thin">
          Weather <span className = "font-semibold">Forecast</span>
          </h1>
        <p className="text-sm mt-2">
          Enter a location to find the weather of and select from the dropdown
          </p>

    <div className="relative flex mt-10 md:mt-4">
        <input className="px-2 py-1 rounded-1-md border-2 border-white"
          type="text" 
          value={term}           
          onChange={onInputChange}
        />

    <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
      {options.map((option: optionType, index : number ) => (
      <li key={option.name + "-" + index}>
        <button className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer" onClick={() => onOptionSelect(option)}>
          {option.name}, {option.country}
        </button>
      </li>
     ))}
     </ul>
        <button className="rounded-r-md border-2 border-zinc-100 hover:border-blue-900 hover:text-blue-900 text-zinc-100 px-2 py-1 cursor-pointer" onClick={onSubmit}>
          search
        </button>
    </div>
        </section>     
    </main>
  )
}
//46.37
export default Search


