const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getDbInfo, CountriesDB } = require('../utils/dbAndApi')
const { Country, Activity } = require("../db");
const axios = require ('axios').default
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



router.get('/countries', async (req, res) => {
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
})

router.get('/countries/:idPais', async (req, res) => {
    const idPais = req.params.idPais.toUpperCase();
    // console.log(idPais, "id que traigo de params")
    try {
        const countryId = await Country.findOne({
            where: {
                id: idPais,
            },
            include: Activity,
        })
        // console.log(countryId)
        return res.json(countryId)
    } catch (error) {   
        res.json (error)
    }
})

router.post('/activity', async (req, res)=> {
    const { name, difficult, duration, season } = req.body;

    // console.log(countryId, 'id que llega de body')
    const act = await Activity.create({
        name: name, 
        difficult: difficult,
        duration: duration,
        season: season,
    })

    const actDb = await Country.findAll({
        where: {
            name: name,  //No me lo toma por el id, pero por el nombre sí.
        }
    })

    const actCreated = await act.addCountries(actDb);

    res.send(actCreated)
})


module.exports = router;



