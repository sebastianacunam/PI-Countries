const {Country, Activity} = require('../db')

const getCountryById = async (req, res) => {
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
}

module.exports = {getCountryById}