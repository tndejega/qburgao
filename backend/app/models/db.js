//Modulo do MySQL
const mysql = require("mysql");
const dbConfig = require("../configs/db.config.js");

//Croa uma conexao com o BD
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: dbConfig.PORT
});

//Nova conexão MySql
connection.connect(error=>{
    if(error) throw error;
    console.log("Banco de Dados Conectado!");
});
 module.exports = connection;
