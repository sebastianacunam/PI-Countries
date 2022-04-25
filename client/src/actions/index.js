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
      var json = await axios("http://localhost:3001/allActivities")
          return dispatch({
            type: GET_ACTIVITIES,
            payload: json.data,
          });        
    };
  };

export function postActivities(payload) {
    return async function (dispatch) {
        const data = await axios.post("http://localhost:3001/activity", payload);
        return data;
    }
}

export function countrySearchBar(name){
    return async function (dispatch){
       try {
        var json = await axios(`http://localhost:3001/countries?name=${name}`)
        return dispatch({
            type: GET_COUNTRY_SEARCH,
            payload: json.data
        })
       } catch (error) {
           alert("No existe tal país.")
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

export function getDetail (id){
    return async function (dispatch){
        try {
            var json = await axios(`http://localhost:3001/countries/${id}`)
            return dispatch({
                type: GET_DETAIL,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const GET_COUNTRIES = "GET_COUNTRIES";                //todos los paises
export const GET_ACTIVITIES = "GET_ACTIVITIES";              //todas las actividades que voy creando
export const GET_DETAIL = "GET_DETAIL"     ;                //el detalle del id de un país
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";    //filtra por continente
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";            //questions..
export const ORDER_BY_NAME = "ORDER_BY_NAME";                //ordena por asc||desc
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";    //ordena por mayor||menor
export const GET_COUNTRY_SEARCH = "GET_COUNTRY_SEARCH";      //busca UN pais en el search
export const POST_ACTIVITY = "POST_ACTIVITY";