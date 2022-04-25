import React from 'react';
import {Link} from 'react-router-dom';

import estilos from './LandingPage.module.css'

export default function LandingPage(){
    return (
        <div className={estilos.background}>
            <div className={estilos.prueba}>
                <h1 className={estilos.welcome}>B i e n v e n i d o s</h1>
                    
                <Link to="/home">
                    <button className={estilos.btn}>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}