const {Country, Activity} = require('../db')

const postNewActivity = async (req, res)=> {
    const { name, difficult, duration, season, countries} = req.body;

    // console.log(countryId, 'id que llega de body')
    const newActivity = await Activity.create({
            name, 
            difficult,
            duration,
            season
    })
    
    const activityDb = await Country.findAll({
        where: {
            name: countries,  //No me lo toma por el id, pero por el nombre sí.
        }
    })
    newActivity.addCountry(activityDb)  
      // console.log("");
    res.json({msg: "se pudoxdddd"})
}

module.exports = {postNewActivity}