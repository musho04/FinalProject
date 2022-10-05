import Salary from "./Salary.js";
import Section from "./Section.js";
import Position from "./Position.js";
import User from "./User.js";

const models = {};

export const initModels = (sequelize) => {
    const users = sequelize.define('user', User);
    const salarys = sequelize.define('salary', Salary);
    const sections = sequelize.define('section', Section);
    const positions = sequelize.define('position', Position);

    salarys.hasMany(users, {as: "users"})
    users.belongsTo(salarys, {as: "salary"});
    sections.hasMany(users, {as: "users"})
    users.belongsTo(sections, {as: "section"});
    positions.hasMany(users, {as: "users"})
    users.belongsTo(positions, {as: "position"});


    models.salary = salarys;
    models.section = sections;
    models.position = positions;
    models.user = users;
}

export const getModel = (key) => models?.[key];

export default initModels;
