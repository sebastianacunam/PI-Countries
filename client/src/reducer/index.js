import { GET_COUNTRIES, FILTER_BY_CONTINENT, FILTER_ACTIVITY, ORDER_BY_NAME, ORDER_BY_POPULATION, GET_COUNTRY_SEARCH } from '../actions'

const initialState = {
    countries : [],
    allCountries : []
}

function rootReducer (state = initialState, action) {
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            }
        
        case GET_COUNTRY_SEARCH: 
            return {
                ...state,
                countries: action.payload
            }

        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            const filteredCountries = action.payload === "All" ? allCountries : allCountries.filter ( c => c.region === action.payload) 
            console.log(action.payload)
            return {
                ...state,
                countries: filteredCountries
            }

        case FILTER_ACTIVITY: 
            const prueba = state.countries.filter(c=> c.activities.some(a=> a.name === action.payload))
            return {
                ...state,
                countries: prueba
            }

        case ORDER_BY_NAME:
            let orderedArray = action.payload === "asc" ? 
                state.countries.sort(function (a, b){
                    if (a.name > b.name){
                        return 1;
                    }
                    if (a.name < b.name){
                        return -1;
                    }
                    return 0
                }) :
                state.countries.sort(function (a, b){
                    if (a.name > b.name){
                        return -1;
                    }
                    if (a.name < b.name){
                        return 1;
                    }
                    return 0
                })
            return {
                ...state,
                countries : orderedArray
            }
            
        case ORDER_BY_POPULATION: 
            let orderedArray2 = action.payload === "menor" ? 
                state.countries.sort(function (a, b){
                    if (a.population > b.population){
                        return 1;
                    }
                    if (a.population < b.population){
                        return -1;
                    }
                    return 0
                }) :
                state.countries.sort(function (a, b){
                    if (a.population > b.population){
                        return -1;
                    }
                    if (a.population < b.population){
                        return 1;
                    }
                    return 0
                })
            return {
                ...state,
                countries : orderedArray2
            }
            
        
        default: 
            return state;

    }
} 

export default rootReducer;