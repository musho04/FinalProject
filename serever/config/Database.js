
import {Sequelize} from "sequelize";

const db = new Sequelize('ProjectExamen1','root','',{
    host: 'localhost',
    password: "password",
    dialect: 'mysql'
});

export default db;

