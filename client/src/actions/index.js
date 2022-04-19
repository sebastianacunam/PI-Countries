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

export function filterCountriesByContinent(payload){
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}

export const GET_COUNTRIES = "GET_COUNTRIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"