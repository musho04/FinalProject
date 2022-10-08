import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import Entrance from "../common/Entrance";
// import Input from "../common/Input";
// import Forma from "../common/Forma";

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
          <Entrance name="Name" valueName={name} eventName={(e) => setName(e.target.value)}/>
          <Entrance name="Salary" valueName={salary} eventName={(e) => setSalary(e.target.value)}/>
          <Entrance name="Section" valueName={section} eventName={(e) => setSection(e.target.value)}/>
          <Entrance name="Position" valueName={position} eventName={(e) => setPosition(e.target.value)}/>
            <Button eventName="submit" nameClass="button is-success" event="Save" />
        </form>
      </div>
    </div>
  );
};

export default AddUser;