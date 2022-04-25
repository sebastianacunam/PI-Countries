import React from "react";
import estilos from './Paginado.module.css'

export default function Paginado ({countries, allCountries, paginado}){ 
    const pageNumbers = []
    
    for (let i=1; i<=Math.ceil(allCountries/countries); i++){
        pageNumbers.push(i)
    }

    return (
        <div>
            <nav>
                <ul className={estilos.paginado}>
                    {pageNumbers &&
                    pageNumbers.map( number => (
                            <li key={number}>
                                <a className={estilos.a} onClick={()=> paginado(number)}>{number}</a>
                            </li>
                            ))}
                </ul>
            </nav>
        </div>
    )
}


