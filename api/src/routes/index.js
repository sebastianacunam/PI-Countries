const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllInfo} = require('../utils/dbAndApi')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/countries', async (req, res) => {
    res.json(await getAllInfo());
})
router.get('/countries/:id', async (req, res) => {
    const {id} = req.params;
})


module.exports = router;



