import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { countrySearchBar } from "../actions";
import estilos from './SearchBar.module.css'; 

export default function SearchBar(){
    const dispatch = useDispatch();
    const [country, setCountry] = useState(""); 

    function handleSearchInput(e){
        e.preventDefault();
        setCountry(e.target.value);
        console.log(country)
    }

    function handleSubmitButton(e){
        e.preventDefault();
        dispatch(countrySearchBar(country))
    }

    return (
        <div className={estilos.background}>
            <input className={estilos.input} onChange={(e) => handleSearchInput(e)} type="text" placeholder="Buscar país..."/>
            <button className={estilos.btn} onClick={(e) => handleSubmitButton(e)} type="submit">Buscar</button>
        </div>
    )
}