import { getModel } from "../models/index.js";

export const getUsers = async(req, res) =>{
    try {
        const User = getModel('user');
        // const users = await User.findAll({ include: [{all: true}] })
        const users = await User.findAll({ include: [{
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
    ]},)
        console.log(JSON.stringify(users, null, 2));
        // const response = await User.findAll();
        console.log("AAAAAAAAAAa===============", users);
        res.status(200).json(users);
    } catch (error) {
        console.log("bbbbbbbbbbbbBBB", error.message);
    }
}

// export const getUserById = async(req, res) =>{
//     try {
//         const response = await User.findOne({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message);
//     }
// }    

export const createUser = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = async(req, res) =>{
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

