import { GET_COUNTRIES, 
    GET_ACTIVITIES,
    FILTER_BY_CONTINENT, 
    FILTER_ACTIVITY,
    ORDER_BY_NAME, 
    ORDER_BY_POPULATION, 
    GET_COUNTRY_SEARCH,
    POST_ACTIVITY,
    GET_DETAIL
     } from '../actions'

const initialState = {
    countries : [],
    allCountries : [],
    activities: [],
    allActivities: [],
    detail: []
}

function rootReducer (state = initialState, action) {
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            }
        case GET_ACTIVITIES:
            return{
                ...state,
                activities: action.payload,
                allActivities: action.payload
                
            }
        case GET_COUNTRY_SEARCH: 
            return {
                ...state,
                countries: action.payload,
                // allCountries: action.payload
            }

        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            const filteredCountries = action.payload === "All" ? allCountries : allCountries.filter ( c => c.region === action.payload) 
            console.log(allCountries)
            console.log(filteredCountries)
            return {
                ...state,
                countries: filteredCountries
            }



        //
        case FILTER_ACTIVITY: 
            // const allAct = state.allCountries
            // const prueba = action.payload !== "Todos" ? state.countries : allAct.filter(c => c.allActivities.includes( a => a.name === action.payload ) )
            // console.log(prueba)

            // return {
            //     ...state,
            //     countries: prueba
            // }
      
            const allCountriesAct = state.allCountries;
        
            const onlyCountry = allCountriesAct.filter((pais) => {
                return pais.activities.length > 0;
            });
        
            let array = [];
        
            for (let i = 0; i < onlyCountry.length; i++) {
                for (let j = 0; j < onlyCountry[i].activities.length; j++) {
                if (onlyCountry[i].activities[j].name.toLowerCase() === action.payload) {
                    array.push(onlyCountry[i]);
                }
                }
            }
        
            const filteredCountries2 = action.payload === "Todos" ? allCountriesAct : array;
         
            return {
                ...state,
                countries: filteredCountries2,
            };

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
            
        case POST_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        default: 
            return state;

    }
} 

export default rootReducer;