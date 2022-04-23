import React from "react";
import { Link } from "react-router-dom";

export default function Card ( {flagImg, name, region, id}){
    return (
        <div>
            <Link to={`/home/${id}`}>
                <h3>{name}</h3>
            </Link>
            <h4>{region}</h4>
            <img src={flagImg} alt="img not found" width='300px' height='200px'/>
        </div>
    );
}