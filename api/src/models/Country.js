const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.STRING,
      primaryKey: true,
      allowNull:false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, //lo cambio un momento por true
    },
    flagImg: {
      type: DataTypes.STRING,
      allowNull: false,//lo cambio un momento por true
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,//lo cambio un momento por true
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,//lo cambio un momento por true
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }, {timestamps: false}
  );
};
