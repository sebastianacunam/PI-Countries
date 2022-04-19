import React from "react";

export default function Card ( {flagImg, name, region}){
    return (
        <div>
            <h3>{name}</h3>
            <h4>{region}</h4>
            <img src={flagImg} alt="img not found" width='300px' height='200px'/>
        </div>
    );
}