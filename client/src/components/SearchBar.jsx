import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { countrySearchBar } from "../actions";

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
        <div>
            <input onChange={(e) => handleSearchInput(e)} type="text" placeholder="Buscar país..."/>
            <button onClick={(e) => handleSubmitButton(e)} type="submit">Buscar</button>
        </div>
    )
}