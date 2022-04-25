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

      <section className={estilos.infoCompleta}>
        {/* <section className={estilos.country}> */}
        {
          theCountry.name ?
            <div className={estilos.country}>
              <img className={estilos.img} src={theCountry.flagImg} alt="Not found" />
              
              <section className={estilos.infopais}>
                <div className={estilos.eachtag}>
                  <h1 key={theCountry.name}>
                    {theCountry.name} 
                  </h1>
                  <h1 key={theCountry.id}>
                    ({theCountry.id})
                  </h1>
                </div>

                <div className={estilos.eachtag}>
                  <h1>Capital</h1>
                  <h4 key={theCountry.capital}>{theCountry.capital}</h4>
                </div>

                <div className={estilos.eachtag}>
                  <h1>Continente</h1>
                  <h4 key={theCountry.region}>{theCountry.region}</h4>
                </div>

                <div className={estilos.eachtag}>
                  <h1>Subregion</h1>
                  <h4 key={theCountry.subregion}>{theCountry.subregion}</h4>
                </div>

                <div className={estilos.eachtag}>
                  <h1>Area</h1>
                  <h4 key={theCountry.area}>{theCountry.area} km2</h4>
                </div>

                <div className={estilos.eachtag}>
                  <h1 >Poblacion</h1>
                  <h4 key={theCountry.population}>{theCountry.population}</h4>
                </div>

                </section>
            </div>
            :
            <p>Loading...</p>
        }
        {/* </section> */}

         
      </section>

      <section className={estilos.infoCompleta}> 
          {theCountry.name && (
            <div className={estilos.country}>
              <h1>Actividades</h1>
              <section className={estilos.infopais}>
                  <div className={estilos.contenedor}>
                    {theCountry.activities &&
                      theCountry.activities.map((act) => (
                        <div className={estilos.eachActivity} key={act.name}>
                          <div className={estilos.eachtag}>
                            <h3 key={act.name}>
                              ACTIVIDAD: {act.name}
                            </h3>
                          </div>

                          <div className={estilos.eachtag}>
                            <h3 key={act.difficult}>
                              DIFICULTAD: {act.difficult}
                            </h3>
                          </div>

                          <div>
                            <h3 key={act.name + "."}>
                              DURACIÓN: {act.duration}
                            </h3>
                          </div>

                          <div>
                            <h3 key={act.season}>
                              TEMPORADA: {act.season}
                            </h3>
                          </div>

                        </div>
                      ))}
                  </div>
                  </section>
            </div>
          )}
          </section>
    </div>
  )
}   