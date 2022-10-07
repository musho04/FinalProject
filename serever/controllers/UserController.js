import { getModel } from "../models/index.js";
import Position from "../models/Position.js";
import Salary from "../models/Salary.js";
import User from "../models/User.js";


export const getUsers = async (req, res) => {
    try {
        const User = getModel('user');
        // const users = await User.findAll({ include: [{all: true}] })
        const users = await User.findAll({
            include: [{
                association: "salary",
                attributes: ["amount"]
            },
            {
                association: "section",
                attributes: ["title"]
            },
            {
                association: "position",
                attributes: ["title"]
            }
            ]
        },)
        console.log(JSON.stringify(users, null, 2));
        // const response = await User.findAll();
        // console.log("AAAAAAAAAAa===============", users);
        res.status(200).json(users);
    } catch (error) {
        // console.log("bbbbbbbbbbbbBBB", error.message);
    }
}

export const getUserById = async (req, res) => {
    try {
        const User = getModel('user');
        // const response = await User.findOne({
        //     where:{
        //         id: req.params.id
        //     }
        // });
        const response = await User.findOne({
            include: [{
                association: "salary",
                attributes: ["amount"]
            },
            {
                association: "section",
                attributes: ["title"]
            },
            {
                association: "position",
                attributes: ["title"]
            }
            ],
            where: {
                id: req.params.id
            }
        },
            
        )
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = async (req, res) => {
    try {
        //-------get Mode in index.js 
        const User = getModel('user')
        const Salary = getModel('salary')
        const Section = getModel('section')
        const Position = getModel('position')

        //Create tabls------------------------------------------
        const [salary] = await Salary.findOrCreate({
            // // association: { include: ['id']},
            attributes: { include: ['id'] },
            where: {
                amount: req.body.salary
            }
        },)

        // console.log("=======", salary);
        const [section] = await Section.findOrCreate({
            association: { include: ['id'] },
            where: {
                title: req.body.section
            }
        })

        const [position] = await Position.findOrCreate({
            association: { include: ['id'] },
            // attributes: { exclude: ['title'] },
            where: {
                title: req.body.position
            }
        })

        await User.create({
            name: req.body.name,
            salaryId: salary.dataValues.id,
            sectionId: section.dataValues.id,
            positionId: position.dataValues.id
        });

        res.status(201).json({ msg: "User Created" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = async (req, res) => {
    try {
        const User = getModel('user')
        const Salary = getModel('salary')
        const Section = getModel('section')
        const Position = getModel('position')
        console.log("=====", req.body);

        const [salary] = await Salary.findOrCreate({
            attributes: { include: ['id'] },
            where: {
                amount: req.body.salary
            }
        },)

        const [section] = await Section.findOrCreate({
            attributes: { include: ['id'] },
            where: {
                title: req.body.section
            }
        },)

        const [position] = await Position.findOrCreate({
            attributes: { include: ['id'] },
            where: {
                title: req.body.position
            }
        },)

        await User.update({
            name: req.body.name,
            salaryId: salary.dataValues.id,
            sectionId: section.dataValues.id,
            positionId: position.dataValues.id
        },
            {
                where: {
                    id: req.params.id
                }
            });

        res.status(200).json({ msg: "User Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const User = getModel('user')

        await User.destroy({
            where: {
                id: req.params.id
            }
            // truncate: true
        });

        console.log("===========", req.params.id);
        res.status(200).json({ msg: "User Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}

