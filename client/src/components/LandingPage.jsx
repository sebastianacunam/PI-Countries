import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage(){
    return (
        <div>
            <h1>B i e n v e n i d o s</h1>
            <Link to="/home">
                <button>Ingresar</button>
            </Link>
        </div>
    )
}