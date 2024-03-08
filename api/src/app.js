const express = require('express');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');  // No se usa más, está deprecado, por eso lo comento.
const morgan = require('morgan');
const routes = require('./routes/index.js');
const sql = require("@vercel/postgres") ;

require('./db.js');

const server = express();

// server.name = 'API';




// const likes = 100;
// const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;


server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use(morgan('dev'));

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;




//configuracion del servidor 