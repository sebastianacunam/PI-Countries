const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllInfo } = require('../utils/dbAndApi')
const { Country, Activity } = require("../db");
const axios = require ('axios').default
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/countries', async (req, res) => {
    const { name } = req.query  
    let allCountries = await getAllInfo();

    if (name) {
        let countryName = await allCountries.filter( c => c.name.toLowerCase().includes(name.toLowerCase()))
        if (countryName.length) res.send(countryName)
        else res.json ("No está el país")
    }
    else res.json(await getAllInfo());
})

router.get('/countries/:idPais', async (req, res) => {
    const idPais = req.params.idPais.toUpperCase();
    console.log(idPais, "id que traigo de params")
    try {
        const countryId = await Country.findOne({
            where: {
                id: idPais,
            },
            include: Activity,
        })
        console.log(countryId)
        return res.json(countryId)
    } catch (error) {   
        res.json (error)
    }
})
router.get('/country', async (req, res) =>{
   
   try {
       const result = await createCountriesFromApi();
       res.json(result)
       
   } catch (error) {
       console.log(error)
   }
})



const createCountriesFromApi = async() => {
    const genresAPI = await axios.get('https://restcountries.com/v3/all');
    const genresResult = genresAPI.data; 

    genresResult.forEach(async g => {
        await Country.findOrCreate({
            where: {
                id: g.cca3,
                name: g.name.common
            }
        })
    })
    
    const genresREADY = genresResult.map(game => {
        return{
            id: game.cca3,
            name: game.name.common
        }
    });
    return genresREADY
}

module.exports = router;



