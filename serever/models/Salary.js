import { DataTypes, Sequelize } from "sequelize";

const Salary = {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allownNull: false
    },
    amount:{
        type: DataTypes.INTEGER,
        allownNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('NOW()')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('NOW()')
    }
}

export default Salary

//------------------------------------------
// import db from "../config/Database.js";


// const Salary = db.connect(function (err) {
//     const query = `
//     CREATE TABLE Salary(
//         salaryId int not null auto_increment,
//         salary int not null,
//         primary key (salaryId)
//     );
//     `
//     if (err) throw err;
//     db.query(query, function (err, res) {
//         if (err) throw err;
//         return res.JSON;
//     })
// })

// export default Salary