import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="name"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">salary</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value) }
                                placeholder="salary"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">section</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={section}
                                onChange={(e) => setSection(e.target.value)}
                                placeholder="section"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">position</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                placeholder="position"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default EditUser;
