import React from 'react'
import { useHistory, useLocation } from 'react-router'

function Details() {

    let {state} = useLocation()
    let history = useHistory()

    const goHomeBtn = () => history.push('/')

    

    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
           
            <div className="container mx-auto mb-16">
                <button className="px-8 py-2 bg-white text-gray-600 shadow-md dark:bg-gray-700 dark:text-white rounded-lg" onClick={() => goHomeBtn()}>
                    <i className="fa fa-arrow-left"></i> Back
                </button>
            </div>
            <div className="container flex mx-auto p-8 pl-0 pr-0">
                <img src={state.flag} className="w-1/2 pr-8" alt={state.name} />
                <div className="p-8 pl-8">
                    <h2 className="font-bold text-2xl mb-8">{state.name}</h2>
                    <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                        <p>Native Name: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.nativeName}</span></p>
                        <p>Population: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.population}</span></p>
                        <p>Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.region}</span></p>
                        <p>Sub Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.subregion}</span></p>
                        <p>Capital: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.capital}</span></p>
                        <p>Top Level Domain: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.topLevelDomain[0]}</span></p>
                        <p>Currencies: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.currencies.map(cur => cur.name)}</span></p>
                        <p>Languages: <span className="dark:text-gray-400 text-gray-700 text-sm">{state.languages.map(lang => lang.name+', ')}</span></p>
                    </div>
                    <div className="flex mt-16">
                        <p className="font-bold">Border Countries: </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
