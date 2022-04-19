import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { getCountries, filterCountriesByContinent } from "../actions";
import { Link } from 'react-router-dom'
import CountryCard from './CountryCard'
import Paginado from "./Paginado";

export default function Home (){
    // esto serían mis Hooks---------------------------------
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries)
    //-------------------------------------------------------
    
    //acá van las variables para el paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [countries, setCountries] = useState(10);
    const lastCountry = currentPage * countries 
    const firstCountry = lastCountry - countries
    const currentCountries = allCountries.slice(firstCountry, lastCountry)

    const paginado = (pageNumbers) => {
        setCurrentPage(pageNumbers)
    }
    

    //-------------------------------------------------------

    useEffect (()=>{
        dispatch(getCountries());
    },[dispatch])

    // Funciones manejadoras---------------------------------

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries());
    }

    function handleFilterByContinent(e){
        e.preventDefault();
        dispatch(filterCountriesByContinent(e.target.value))
    }
    //-------------------------------------------------------


    return (
        <div>
            <Link to='/activity'>Crear actividad</Link>
            <h1>Países y más países.</h1>
            <button onClick={e => handleClick(e)}>
                Volver a cargar todos los países
            </button>
            <div>
                <select onChange={e => handleFilterByContinent(e)}>
                    <option value="All">Todos</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas" >America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <select>
                    <option value="All">Activity</option>
                    <option value="">-</option>
                    <option value="">-</option>
                    <option value="">-</option>
                    <option value="">-</option>                    
                </select>
                 <select>
                    <option value="">Ninguno</option>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                 </select>
                 <select>
                    <option value="">Ninguno</option>
                    <option value="mayor">Mayor poblacion</option>
                    <option value="menor">Menor poblacion</option>
                 </select>

                <Paginado countries={countries} allCountries={allCountries.length} paginado={paginado}/>
                {
                    currentCountries?.map( c => {
                        return(
                            <Link to={"/home/" + c.id}> {/* el c.id es para clickear y que me lleve al pais como tal.*/ }
                                <CountryCard name={c.name} flagImg={c.flagImg} region={c.region} key={c.id}/>
                            </Link>
                            
                        )
                    })
                }

            </div>
        </div>
    )
}
