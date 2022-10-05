import { DataTypes, Sequelize } from "sequelize";

const Section = {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allownNull: false
    },
    title:{
        type: DataTypes.STRING,
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

export default Section
//------------------------------------------------
// import db from "../config/Database.js";


// const Section = db.connect(function (err) {
//     const query = `
//     CREATE TABLE Section(
//         sectionId int not null auto_increment,
//         section varchar(255),
//         primary key (sectionId)
//     );
//     `
//     if (err) throw err;
//     db.query(query, function (err, res) {
//         if (err) throw err;
//         return res.JSON;
//     })
// })

// export default Section