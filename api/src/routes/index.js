const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllInfo } = require('../utils/dbAndApi')
const { Country, Activity } = require("../db");

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

// router.get('/countries/:idPais', async (req, res) => {
//    try {
//     const {idPais} = req.params.toUpperCase();
//     const countryId = await Country.findOne({
//         where: {
//             id: idPais,
//         },
//         include: Activity,
//     })
//     return res.json(countryId)
//    } catch (error) {
//        res.send(error)
//    }
   
// })


module.exports = router;



