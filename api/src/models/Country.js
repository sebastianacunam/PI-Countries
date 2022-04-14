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
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true, //lo cambio un momento por true
    },
    flagImg: {
      type: DataTypes.STRING,
      allowNull: true,//lo cambio un momento por true
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: true,//lo cambio un momento por true
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,//lo cambio un momento por true
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }, {timestamps: false}
  );
};
