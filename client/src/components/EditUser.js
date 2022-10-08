import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../common/Button";
import Entrance from "../common/Entrance";

const EditUser = () => {
    const [name, setName] = useState("");
    console.log("====name====", name);
    const [salary, setSalary] = useState("");
    const [section, setSection] = useState("");
    const [position, setPosition] = useState("");
    // const [user, setUser] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();
    console.log('------ID----', id);

    useEffect(() => {
        getUserById();
    }, []);

    const updateUser = async (e) => {
        e.preventDefault();
        console.log("====salary==", salary);
        try {
            await axios.put(`http://localhost:5001/users/${id}`, {
                name,
                salary,
                section,
                position
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5001/users/${id}`);
        // setName(response.data)
        console.log(response.data, '1111111111111111111111');
        setName(response.data.name);
        setSalary(response.data.salary.amount);
        setSection(response.data.section.title);
        setPosition(response.data.position.title)
    };
    console.log("========", getUserById);
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateUser}>
                    <Entrance name="Name" valueName={name} eventName={(e) => setName(e.target.value)} />
                    <Entrance name="Salary" valueName={salary} eventName={(e) => setSalary(e.target.value)} />
                    <Entrance name="Section" valueName={section} eventName={(e) => setSection(e.target.value)} />
                    <Entrance name="Position" valueName={position} eventName={(e) => setPosition(e.target.value)} />
                    <Button eventName="submit" nameClass="button is-success" event="Update" />
                </form>
            </div>
        </div>

    );
};

export default EditUser;
