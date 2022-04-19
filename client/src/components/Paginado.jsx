import React from "react";

export default function Paginado ({countries, allCountries, paginado}){ 
    const pageNumbers = []
    
    for (let i=1; i<=Math.ceil(allCountries/countries); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="paginado">
                {pageNumbers &&
                pageNumbers.map( number => (
                        <li key={number}>
                            <a onClick={()=> paginado(number)}>{number}</a>
                        </li>
                        ))}
            </ul>
        </nav>
    )
}