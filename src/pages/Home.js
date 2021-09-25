import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ThumbDetail from '../components/ThumbDetail'

function Home() {
    const [countries, setCountries] = useState([])

    useEffect(async () => {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        await setCountries(data)
    }, [])

 

    const filterByRegion = async region => {
        if(region === '') return
        const res = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        const data = await res.json()
        await setCountries(data)
    }

    const searchCountry = async term => {
        if(term.length < 3 || term === '') return
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${term}`)
        const data = await res.json()
        await console.log(data)
        await setCountries(data)
    }
    return (    
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
            
            
            <div className="flex container mx-auto mb-16">
                <i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
                <input type="text" placeholder="Search for a country..." className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-700" onChange={ term => searchCountry(term.target.value)} />
                <select className="ml-auto my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700" onChange={ val => filterByRegion(val.target.value)}>
                    <option value="">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
            <div className="container grid grid-cols-4 gap-16 mx-auto">
                {countries.map( (country, index ) => <Link to={{ pathname : "details", state: country }}  key={index}><ThumbDetail 
                                                title={country.name} 
                                                image_url={country.flag} 
                                                population={country.population}
                                                region={country.region}
                                                capital={country.capital}
                                            /></Link> )}
            </div>
        </div>
    )
}

export default Home
