import React from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";

export default function Detail (props){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch])

    const theCountry = useSelector((state)=> state.detail)
    console.log(theCountry)
    return (
        <div>
            {

                theCountry.length > 0 ?
                <div>
                    <h1>{theCountry.name} ({theCountry.id})</h1>
                </div>
                :
                <p>Loading...</p>
            }
        </div>
    )
}   