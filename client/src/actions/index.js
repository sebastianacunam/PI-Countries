import axios from 'axios'; 

export function getCountries(){
    return async function (dispatch){
        var json = await axios("http://localhost:3001/countries") //acá conecto mi front con mi back
        return dispatch ({
            type: GET_COUNTRIES,
            payload: json.data
        })
    }
}

export function getActivities(){
    return async function (dispatch){
        var json = await axios('http://localhost:3001/countries')
        return dispatch ({
            type: GET_ACTIVITIES,
            payload: json.data
        })
    }
}

export function postActivity(payload){
    return async function (dispatch){
        const response = await axios.post('http://localhost:3001/activity', payload)
        console.log(response)
        return response 
    }
}

export function countrySearchBar(payload){
    return async function (dispatch){
       try {
        var json = await axios(`http://localhost:3001/countries?name=${payload}`)
        return dispatch({
            type: GET_COUNTRY_SEARCH,
            payload: json.data
        })
       } catch (error) {
          console.log(error) 
       }
    }
}

export function filterCountriesByContinent(payload){
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}

export function filterActivity(payload){
    return {
        type: FILTER_ACTIVITY,
        payload
    }
}

export function orderByName(payload){
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByPopulation (payload){
    return {
        type: ORDER_BY_POPULATION,
        payload
    }
}

export const GET_COUNTRIES = "GET_COUNTRIES";                //todos los paises
export const GET_ACTIVITIES = "GET_ACTIVITIES";              //todas las actividades???
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";    //filtra por continente
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";            //questions..
export const ORDER_BY_NAME = "ORDER_BY_NAME";                //ordena por asc||desc
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";    //ordena por mayor||menor
export const GET_COUNTRY_SEARCH = "GET_COUNTRY_SEARCH";      //busca UN pais en el search
export const POST_COUNTRY = "POST_COUNTRY";