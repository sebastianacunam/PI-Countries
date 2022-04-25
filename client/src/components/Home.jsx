import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { getCountries, filterCountriesByContinent, orderByName,orderByPopulation } from "../actions";
import { Link } from 'react-router-dom'
import CountryCard from './CountryCard'
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import FiltroActivity from "./FiltroActivity";
import estilos from './Home.module.css'

export default function Home (){
    // esto serían mis Hooks---------------------------------
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries)
    //-------------------------------------------------------
    
    //constante para el ordenamiento a-z//z-a----------------
    const [order, setOrder] = useState("");
    //-------------------------------------------------------
    //acá van las variables para el paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [countries] = useState(10);
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

    function handleOrderAzZa(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handleOrderByPopulation(e){
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }
    //-------------------------------------------------------


    return (
        <div className={estilos.background}>
            <div className={estilos.top}>
                <h3>CountryWiki</h3>
                <SearchBar/>
                <Link to='/activity'>
                    <button className={estilos.volver}>Crear actividad</button>
                </Link> 
                <button className={estilos.cargar} onClick={e => handleClick(e)}>
                    Cargar todos los países
                </button>
                <Link to='/'>
                    <button className={estilos.volver}>Volver</button>
                </Link>
            </div>


            <section className={estilos.top2}>
                
                <div className={estilos.botones2}>
                    <div className={estilos.prueba}>
                        <h3>CONTINENTE</h3>
                        <select className={estilos.each} onChange={e => handleFilterByContinent(e)}>
                            <option value="All" key="All">Todos</option>
                            <option value="Africa" key="Africa">Africa</option>
                            <option value="Americas" key="Americas">America</option>
                            <option value="Asia" key="Asia">Asia</option>
                            <option value="Europe" key="Europe">Europa</option>
                            <option value="Oceania" key="Oceania">Oceania</option>
                        </select>
                    </div>
                    
                    <div className={estilos.prueba}>
                        <h3>ACTIVIDADES</h3>
                        <FiltroActivity className={estilos.each} setCurrentPage={setCurrentPage} setOrder={setOrder} />
                    </div>
                    
                    <div className={estilos.prueba}>
                        <h3>ORDEN ALFABÉTICO</h3>
                        <select className={estilos.each} onChange ={e => handleOrderAzZa(e)}>
                            <option value="">-</option> 
                            <option value="asc">Ascendente</option>
                            <option value="desc">Descendente</option>
                        </select>
                    </div>
                    <div>
                        <h3>POBLACIÓN</h3>
                        <select className={estilos.each} onChange={e => handleOrderByPopulation(e)}>
                            <option value="">-</option>
                            <option value="mayor">Mayor poblacion</option>
                            <option value="menor">Menor poblacion</option>
                        </select>
                    </div>
                </div>
            </section>

                <Paginado countries={countries} allCountries={allCountries.length} paginado={paginado}/>
                
                {
                    currentCountries?.map( c => {
                        return(
                            // <Link to={"/home/" + c.id}> {/* el c.id es para clickear y que me lleve al pais como tal.*/ }
                                <CountryCard name={c.name} flagImg={c.flagImg} region={c.region} id={c.id} key={c.id}/>
                            // </Link>
                            
                        )
                    })
                }
                
            
        </div>
    )
}
