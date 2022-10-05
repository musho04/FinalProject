import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [userName, setuserName] = useState("");
  const [salary, setSalary] = useState("");
  const [section, setSection] = useState("");
  const [position, setPosition] = useState("");

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/users", {
        userName,
        salary,
        section,
        position
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
                placeholder="Name"
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
                onChange={(e) => setSalary(e.target.value)}
                placeholder="Salary"
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
          
          
          {/* <div className="field">
            <label className="label">section</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div> */}
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;