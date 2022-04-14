const axios = require ('axios');
const {Country, Activity} = require('../db')
// const Activity = require('../models/Activity');

const getApiInfo = async () => {
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiInfo = await apiUrl.data.map(i => {
        let comodin = ""
        let comodin2 = ""
        const ver = (capital) =>  capital ? comodin2.concat(capital) : "no hay capital" 
        // console.log(i.capital)
        // console.log(i.continents[0], "i.continents")
        return {
            name: i.name.common,
            id: i.cca3,
            flagImg: i.flags[0],
            continent: comodin.concat(i.continents[0]),
            capital: ver(i.capital),
            subregion: i.subregion,
            area: i.area,
        }
    })
    return apiInfo
}

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

const getAllInfo = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();

    const allInfo = apiInfo.concat(dbInfo); 
    return allInfo; 
}
// console.log(getAllInfo(), "devuelve una promesa")




module.exports = {
    getApiInfo,
    getDbInfo,
    getAllInfo
}