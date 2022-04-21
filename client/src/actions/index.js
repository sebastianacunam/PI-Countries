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

export const GET_COUNTRIES = "GET_COUNTRIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION"; 
export const GET_COUNTRY_SEARCH = "GET_COUNTRY_SEARCH"; 