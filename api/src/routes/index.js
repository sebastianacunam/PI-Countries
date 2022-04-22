const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllCountries } = require('../utils/getAllCountries')
const { getCountryById } = require('../utils/getCountryById')
const { postNewActivity } = require('../utils/postNewActivity')
const { getAllActivities } = require('../utils/getAllActivities')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



router.get('/countries', getAllCountries)

router.get("/allActivities", getAllActivities)

router.get('/countries/:idPais', getCountryById)

router.post('/activity', postNewActivity)



module.exports = router;



