// utils/db .js

const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

module.exports = {
   getConnection(){
       return new Promise(function(result, reject){
           pool.getConnection().
           then(function(conn){
              result(conn);
           }).
           catch(function(error){
               reject(error);
           });
       });
       // return pool.GetConnection();
   }
};
