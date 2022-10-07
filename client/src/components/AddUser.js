import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [section, setSection] = useState("");
  const [position, setPosition] = useState("");

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/users", {
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
                onChange={(e) => setSalary(e.target.value)}
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;