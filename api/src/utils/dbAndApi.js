const axios = require ('axios');
const {Country, Activity} = require('../db')
// const Activity = require('../models/Activity');

const getDbInfo = async () => {
    return await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name', 'difficult', 'duration', 'season'],
            through: {
                attributes: [],
            },  
        }
    })
}

//comento comodin y continent porque trabajando en el front me di cuenta que no necesito continent, sino
//que necesitaba region para tomar el valor de continent. 

const CountriesDB = async() => {
    const countriesAPI = await axios.get('https://restcountries.com/v3/all');
    const countries = countriesAPI.data; 
    let comodin2 = ""
    // let comodin = "" 
    const cap = (capital) =>  capital ? comodin2.concat(capital) : "no hay capital" 
    const sub = (subregion) => subregion ? subregion : "no hay subregion"

    countries.forEach(async c => {
        await Country.findOrCreate({
            where: {
                id: c.cca3,
                name: c.name.common, 
                flagImg: c.flags[0],
                region: c.region,
                // continent: comodin.concat(c.continents[0]),
                capital: cap(c.capital),
                subregion: sub(c.subregion),
                area: c.area,
                population: c.population,
            }, include: Activity
        })
    })
    
    const countriesReady = countries.map(country => {
        return{
            name: country.name.common,
            id: country.cca3,
            flagImg: country.flags[0],
            region: country.region,
            // continent: comodin.concat(country.continents[0]),
            capital: cap(country.capital),
            subregion: sub(country.subregion),
            area: country.area,
            population: country.population,
            include: Activity
        }
    });
    return countriesReady
}

// const getApiInfo = async () => {
//     const apiUrl = await axios.get('https://restcountries.com/v3/all');
//     const apiInfo = await apiUrl.data.map(i => {
//         let comodin = ""
//         let comodin2 = ""
//         const cap = (capital) =>  capital ? comodin2.concat(capital) : "no hay capital" 
//         // console.log(i.capital)
//         // console.log(i.continents[0], "i.continents")
//         return {
//             name: i.name.common,
//             id: i.cca3,
//             flagImg: i.flags[0],
//             continent: comodin.concat(i.continents[0]),
//             capital: cap(i.capital),
//             subregion: i.subregion,
//             area: i.area,
//             include: Activity
//         }
//     })
//     return apiInfo
// }


// const getAllInfo = async () => {
//     const apiInfo = await getApiInfo();
//     const dbInfo = await getDbInfo();

//     const allInfo = apiInfo.concat(dbInfo); 
//     return allInfo; 
// }



module.exports = {
    getDbInfo,
    CountriesDB,
    // getAllInfo, 
    // getApiInfo,
}