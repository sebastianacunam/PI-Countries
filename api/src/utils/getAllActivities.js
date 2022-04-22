const { Activity } = require("../db");


const getAllActivities = async (req, res) => {
 
    const allActivities = await Activity.findAll();

    if (allActivities) {
      res.json(allActivities);
    } else {
      res.status(404).json({ message: "No se han encontrado actividades." });
    }
  
};

module.exports = { getAllActivities };