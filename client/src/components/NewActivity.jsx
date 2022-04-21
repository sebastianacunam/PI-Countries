import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {postActivity, getActivities} from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';

export default function NewActivity (){
    const dispatch = useDispatch()
    const activities = useSelector( (state) => state.activities )
    const countries = useSelector ( (state) => state.countries )

    const [input, setInput] = useState({
        name: "", 
        difficult: "",
        duration: "",
        season: "",
        countryId: []
    })

    useEffect(() => {
        dispatch(getActivities())
    },[dispatch])

    function handleChange(e){
        setInput({
            ...input, 
            [e.target.name] : e.target.value
        })
    }

    function handleSelect(e){
        setInput({
            ...input,
            activities :  e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postActivity(input))
        alert("Actividad creada")
        setInput({
            name: "", 
            difficult: "",
            duration: "",
            season: "",
            countryId: []
        })
    }
    return (
        <div>
            <Link to='/home'><button> Volver</button></Link>
            <h1>Agrega una actividad nueva!</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
                    <label>Nombre:</label>
                    <input onChange={handleChange} type="text" value={input.name} name="name" />
                </div>
                <div>
                    <label>Duración:</label>
                    <input onChange={handleChange} type="text" value={input.duration} name="duration" />
                </div>
                <div>
                    <label>Dificultad:</label>
                    <select onChange={(e)=>handleSelect(e)}>
                        <option value="-">-</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div>
                    <label>Temporada:</label>
                    <select onChange={(e)=>handleSelect(e)}>
                        <option value="-">-</option>
                        <option value="Winter">Invierno</option>
                        <option value="Autumn">Otoño</option>
                        <option value="Spring" >Primavera</option>
                        <option value="Summer">Verano</option>
                    </select>
                </div>
                <div>
                    <label>Pais:</label>
                    <select onChange={(e)=>handleSelect(e)}>
                        {
                            countries.map((country) =>{
                                return <option value={country.name}>{country.name}</option>
                            })
                        }
                    </select>
                    
                </div>
                
                <button type="submit">Crear Actividad</button>
            </form>
        </div>
    )
}