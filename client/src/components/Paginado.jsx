import React from "react";
import estilos from './Paginado.module.css'

export default function Paginado ({countries, allCountries, paginado, lastPage, firstPage, nextPage, prevPage}){ 
    const pageNumbers = []

  
    for (let i=1; i<=Math.ceil(allCountries/countries); i++){
        pageNumbers.push(i)
    }

    return (
        <div>
            <nav>
                <ul className={estilos.paginado}>
                
                <button className={estilos.pageButtons} onClick={ ()=> firstPage() }> Primera </button>
                <button className={estilos.pageButtons} onClick={ ()=> prevPage() }> Anterior </button>   
                    {pageNumbers &&
                    pageNumbers.map( number => (
                            <li key={number}>
                                <p className={estilos.a} onClick={()=> paginado(number)}>{number}</p>
                            </li>
                            ))}
                <button className={estilos.pageButtons} onClick={ ()=> nextPage() }> Siguiente </button>   
                <button className={estilos.pageButtons} onClick={()=> lastPage()}> Última </button>
                </ul>
             </nav>
        </div>
    )
}


