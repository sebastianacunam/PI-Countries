const { getDbInfo, CountriesDB } = require('../utils/dbAndApi')
const {Country} = require ('../db')


const getAllCountries = async (req, res) => {
    const { name } = req.query  
    try{
    let allCountries = await getDbInfo();
    if (!allCountries.length){
        const result = await CountriesDB();
        res.json(result)
    } else {
        if (!name) res.send(allCountries)
        else {
            let countryName = await allCountries.filter( c => c.name.toLowerCase().includes(name.toLowerCase()))
            /*if (countryName.length)*/ res.send(countryName)
            console.log("toy aka")
        }
    }   
    }
    catch(err){
        res.status(404).json ({msg:err})
    }
}

const newCountry = async ( req, res) => {
    const { name, region, capital, subregion, area, population, flagImg } = req.body
    try {

        const newC = await Country.create({
            
                name,
                region,
                capital,
                subregion,
                area,
                flagImg,
                population
            
        })
        res.json(newC)
} catch (error) {
    console.log(error)
}
}

module.exports = {getAllCountries, newCountry}

// Acá también obtengo por query el nombre del país