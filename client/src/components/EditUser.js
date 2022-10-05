import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    // const [userName, setuserName] = useState("");
    // const [salary, setSalary] = useState("");
    // const [section, setSection] = useState("");
    // const [position, setPosition] = useState("");
    const [user, setUser] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById();
    }, []);

    // const updateUser = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.patch(`http://localhost:5001/users/${id}`, {
    //             user,
    //             salary,
    //             section,
    //             position
    //         });
    //         navigate("/");
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5001/users/${id}`);
        setUser(response.data)
        console.log(response.data);
        // setuserName(response.data.userName);
        // setSalary(response.data.salary);
        // setSection(response.data.section);
        // setPosition(response.data.position)
    };

    return (
        // <div className="columns mt-5 is-centered">
        //     <div className="column is-half">
        //         <form onSubmit={updateUser}>
        //             <div className="field">
        //                 <label className="label">Name</label>
        //                 <div className="control">
        //                     <input
        //                         type="text"
        //                         className="input"
        //                         value={userName}
        //                         onChange={(e) => setuserName(e.target.value)}
        //                         placeholder="Name"
        //                     />
        //                 </div>
        //             </div>
        //             <div className="field">
        //                 <label className="label">salary</label>
        //                 <div className="control">
        //                     <input
        //                         type="text"
        //                         className="input"
        //                         value={salary}
        //                         onChange={(e) => setSalary(e.target.value)}
        //                         placeholder="salary"
        //                     />
        //                 </div>
        //             </div>
        //             <div className="field">
        //                 <label className="label">section</label>
        //                 <div className="control">
        //                     <input
        //                         type="text"
        //                         className="input"
        //                         value={section}
        //                         onChange={(e) => setSection(e.target.value)}
        //                         placeholder="section"
        //                     />
        //                 </div>
        //             </div>
        //             <div className="field">
        //                 <label className="label">position</label>
        //                 <div className="control">
        //                     <input
        //                         type="text"
        //                         className="input"
        //                         value={position}
        //                         onChange={(e) => setPosition(e.target.value)}
        //                         placeholder="position"
        //                     />
        //                 </div>
        //             </div>
        //             <div className="field">
        //                 <button type="submit" className="button is-success">
        //                     Update
        //                 </button>
        //             </div>
        //         </form>
        //     </div>
        // </div>
        <div>

        </div>
    );
};

export default EditUser;
