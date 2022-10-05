
import {Sequelize} from "sequelize";

const db = new Sequelize('ProjectExamen1','root','',{
    host: 'localhost',
    password: "password",
    dialect: 'mysql'
});
//---------------------
// import mysql from "mysql2"

// console.log("-----------------------");

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'ProjectExamen1'
// })

//--------------------------------------------
// import {Sequelize} from "sequelize";

// const db = new Sequelize('ProjectExamen','root','',{
//     host: 'localhost',
//     password: "password",
//     dialect: 'mysql'
// });

export default db;

