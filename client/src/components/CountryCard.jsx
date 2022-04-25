import React from "react";
import { Link } from "react-router-dom";
import estilos from './CountryCard.module.css'

export default function Card ( {flagImg, name, region, id}){
    return (
        <div className = {estilos.countryCard}>
            <div className={estilos.borde}>
                <Link to={`/home/${id}`}>
                    <h3>{name}</h3>
                </Link>
                <h4>{region}</h4>
                    <img className={estilos.flag} src={flagImg} alt="img not found"/>
            </div>
        </div>
    );
}