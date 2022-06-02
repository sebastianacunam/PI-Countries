import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {postActivities, getCountries} from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import estilos from './NewActivity.module.css'
  

//Ésta sería mi función validadora.
function validate(input) {
    let errors = {};
    
    if (!input.name){
        errors.name = "Se requiere una actividad turística"
    } 

    if (!input.difficult || input.difficult === "-"){
        errors.difficult = "Seleccione una dificultad"
    } 
  
    if (!input.season || input.season === "-"){
        errors.season = "Seleccione una temporada"
    }
    
    if (!input.duration) {
        errors.duration = "Se require el tiempo de duración";
    }else if (input.duration < 1) {
        errors.duration = "La cantidad de días no puede ser negativa ó 0";
    }

    if (!input.countries.length) {
        errors.countries = "Por favor, indique al menos un país";
    } 

    return errors
}

export default function NewActivity (){
    const dispatch = useDispatch()
    const countries = useSelector ( (state) => state.countries )
    

    useEffect( () => {
        dispatch(getCountries())
    })
    //Estados..
        //Éste sería mi estado manejador de errores para el formulario.
    const [errors, setErrors] = useState({});
        //Éste sería mi estado para los inputs del form. 
    const [input, setInput] = useState({
        name: "", 
        season: "",
        difficult: "",
        duration: "",
        countries: []
    })
        // Acá consologueaba para saber qué mostraban los inputs-
    //console.log(input) 

    //Funciones "handles" de mi formulario. 
        //Con éste, modifico el estado name, season, difficult y duration.
    function handleChange(e){
        setInput({
            ...input, 
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }
        //Con éste, modifico el estado de países y que vaya verificando si ya estaba o no incluido en el array de countries
    function handleSelect(e){
        // setInput({
        //     ...input,
        //     countries: input.countries.includes(e.target.value)
        //       ? input.countries
        //       : [...input.countries, e.target.value],
        //   });
        //   setErrors(validate({
        //     ...input,
        //     countries: input.countries.includes(e.target.value)
        //       ? input.countries
        //       : [...input.countries, e.target.value],
        //   }));  
       if(!input.countries.includes(e.target.value) && e.target.value !== "-"){
            setInput({
                ...input,
                countries: [...input.countries, e.target.value]
            });
            setErrors(validate({
                ...input,
                countries: [...input.countries, e.target.value]
            }));
        }
    }
        //Con éste, hago dispatch del postActivities
    function handleSubmit(e){
        if(input.name && input.season && input.difficult && input.duration && input.countries){
            e.preventDefault();
            dispatch(postActivities(input))
            alert("Actividad creada")
            setInput({
                name: "", 
                season: "",
                difficult: "",
                duration: "",
                countries: []
            })
        } else { 
            e.preventDefault();
            alert ('Faltan campos por completar!')
        }
        
    }

    function handleDelete(country){
        setInput({
            ...input,
            countries: input.countries.filter((c) => c !== country),
        });
        setErrors(validate({
            ...input,
            countries: input.countries.filter((c) => c !== country),
          }));
    }

    return (
        <section className={estilos.background}>
           
           
             <section className={estilos.top}>
                <Link to='/home' className={estilos.link}>
                    <button className={estilos.volver}> Volver</button>
                </Link>
                <h1 >Agrega una actividad nueva!</h1>
            </section>



            <section className={estilos.space}>

                <form onSubmit={(e)=>handleSubmit(e)} className={estilos.form}>
                    <div>
                        <label>Nombre:</label>
                        <input className={errors.name ? estilos.err : estilos.labels} onChange={(e) => handleChange(e)} type="text" value={input.name} name="name" />
                        {errors.name && (<p className={estilos.errors}>{errors.name}</p>)}
                    </div>
                    <div>
                        <label>Duración:</label>
                        <input className={errors.duration ? estilos.err : estilos.labels} onChange={(e) => handleChange(e)} placeholder= "Duración de la actividad..." type="text" value={input.duration} name="duration" />
                        {errors.duration && (<p className={estilos.errors}>{errors.duration}</p>)}
                    </div>
                    <div>
                        <label>Dificultad:</label>
                        <select className={errors.difficult ? estilos.err : estilos.labels} onChange={(e) => handleChange(e)} name="difficult">
                            <option selected="-" value="-">-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        {errors.difficult && (<p className={estilos.errors}>{errors.difficult}</p>)}
                    </div>
                    <div>
                        <label>Temporada:</label>
                        <select className={errors.season ? estilos.err : estilos.labels} onChange={(e) => handleChange(e)} name="season">
                            <option value="-">-</option>
                            <option value="Winter">Invierno</option>
                            <option value="Autumn">Otoño</option>
                            <option value="Spring" >Primavera</option>
                            <option value="Summer">Verano</option>
                        </select>
                        {errors.season && (<p className={estilos.errors}>{errors.season}</p>)}
                    </div>
                    <div>
                        <label>Pais:</label>
                        <select className={errors.countries ? estilos.err : estilos.labels} onChange={(e) => handleSelect(e)}>
                            <option value="-">-</option>
                            {
                                countries.map((country) =>{
                                    return <option value={country.name}>{country.name}</option>
                                })
                            }
                        </select>
                        {errors.countries && (<p className={estilos.errors}>{errors.countries}</p>)}
                        
                    </div>
                    {input.countries?.map((country) => (
                        <div className={estilos.btnContain} key={country} >
                            <button className={estilos.xBtn} onClick={() => handleDelete(country)}>
                                x
                            </button>
                            <p className={estilos.bPais}>{country}</p>
                        </div>
                ))}

                    {
                    !input.name || !input.difficult || !input.duration || input.difficult === '-' || !input.season || input.season === '-' || !input.countries.length ? 
                        <button className={estilos.crearNo} disabled type="submit">
                            Crear Actividad!
                        </button>
                    : 
                        <button className={estilos.crear} type="submit">
                            Crear Actividad!
                        </button>
                    }
                </form>
            </section>
        </section>
    )
}