import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import estilos from './CountryDetail.module.css'

export default function Detail(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetail(props.match.params.id))
  }, [dispatch])

  const theCountry = useSelector((state) => state.detail)
  console.log(theCountry)
  return (

    <div className={estilos.background}>
      <section className={estilos.top}>
        <Link to="/home">
          <button className={estilos.volver}> Volver </button>
        </Link>
      </section>
      {
        theCountry.name ?
          <div>
            <img src={theCountry.flagImg} alt="Not found" />

            <div>
              <h1 key={theCountry.name}>
                {theCountry.name} ({theCountry.id})
              </h1>
            </div>
            <div>
              <label>Capital</label>
              <h3 key={theCountry.capital}>{theCountry.capital}</h3>
            </div>
            <div>
              <label>Continente</label>
              <h2 key={theCountry.region}>
                {theCountry.region}
              </h2>
            </div>
            <div>
              <label>Subregion</label>
              <h3 key={theCountry.subregion}>
                {theCountry.subregion}
              </h3>
            </div>
            <div>
              <label>Area</label>
              <h3 key={theCountry.area}>
                {theCountry.area} km2
              </h3>
            </div>
            <div>
              <label >Poblacion</label>
              <h3 key={theCountry.population}>
                {theCountry.population}
              </h3>
            </div>
          </div>
          :
          <p>Loading...</p>
      }

      {theCountry.name && (
        <div >
          <h3>Actividades</h3>
          <div >
            {theCountry.activities &&
              theCountry.activities.map((act) => (
                <div key={act.name}>
                  <h3 key={act.name}>
                    {act.name}
                  </h3>

                  <h3 key={act.difficult}>
                    DIFICULTAD: {act.difficult}
                  </h3>

                  <h3 key={act.name + "."}>
                    DURACIÓN: {act.duration}
                  </h3>

                  <h3 key={act.season}>
                    TEMPORADA: {act.season}
                  </h3>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}   