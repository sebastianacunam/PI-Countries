const { getDbInfo, CountriesDB } = require('../utils/dbAndApi')


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
            if (!countryName.length){
                res.sendStatus(404)
            } else {
                res.send(countryName)
            }
        }
    }   
    }
    catch(err){
        res.status(404).json ({msg:err})
    }
}

module.exports = {getAllCountries}

// Acá también obtengo por query el nombre del país