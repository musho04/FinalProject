import { DataTypes, Sequelize } from "sequelize";

const Position = {
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

export default Position

//--------------------------------------------
// import db from "../config/Database.js";


// const Position = db.connect(function (err) {
//     const query = `\
//     CREATE TABLE \`Position\`(\
//         \`positionId\` int not null auto_increment,\
//         \`poxos\` varchar(255),\
//         primary key (\`positionId\`)
//     );\
//     `
//     if (err) throw err;
//     db.query(query, function (err, res) {
//         if (err) throw err;
//         return res.JSON;
//     })
// })

// export default Position