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
