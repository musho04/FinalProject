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
