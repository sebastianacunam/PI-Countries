const { getDbInfo, CountriesDB } = require('../utils/dbAndApi')


const getAllCountries = async (req, res) => {
    const { name } = req.query  
    let allCountries = await getDbInfo();
    if (!allCountries.length){
        const result = await CountriesDB();
        res.json(result)
    } else {
        if (name) {
            let countryName = await allCountries.filter( c => c.name.toLowerCase().includes(name.toLowerCase()))
            if (countryName.length) res.send(countryName)
            else res.json ("No está el país")
        }
        else res.json(allCountries);
    }   
}

module.exports = {getAllCountries}

// Acá también obtengo por query el nombre del país