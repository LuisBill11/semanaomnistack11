const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

module.exports = app;
/**
 * Métodos HTTP
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parametros
  * Query Params: parametros nomeados enviados na rota após os símbolo "?" (Filtros, paginação)
  * Route Params: parametros utilizados para identificar recursos
  * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Bancos de Dados
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */



