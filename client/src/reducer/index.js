import { GET_COUNTRIES, FILTER_BY_CONTINENT } from '../actions'

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

        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            const filteredCountries = action.payload === "All" ? allCountries : allCountries.filter ( c => c.region === action.payload) 
            console.log(action.payload)
            return {
                ...state,
                countries: filteredCountries
            }



        default: 
            return state;

    }
} 

export default rootReducer;