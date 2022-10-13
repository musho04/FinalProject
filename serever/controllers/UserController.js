import { getModel } from "../models/index.js";

export const getUsers = async (req, res) => {
    try {
        const User = getModel('user');
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
        res.status(200).json(users);
    } catch (error) {
    }
}

export const getUserById = async (req, res) => {
    try {
        const User = getModel('user');
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
            attributes: { include: ['id'] },
            where: {
                amount: req.body.salary
            }
        },)

        const [section] = await Section.findOrCreate({
            association: { include: ['id'] },
            where: {
                title: req.body.section
            }
        })

        const [position] = await Position.findOrCreate({
            association: { include: ['id'] },
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
        });
        res.status(200).json({id: +req.params.id, msg: "User Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}

