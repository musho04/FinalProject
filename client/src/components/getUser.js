import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const { id } = useParams();




const UserGet = async () => {
    const [widgets, setWidgets] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:5001/users/30`)
            .then((response) => {
                const data = response.data;
                setWidgets([...widgets, ...data])
            });
    }, []); 

    
    useEffect(() => {

        console.log("Changed Widgets: ", widgets)

    }, [widgets])
    return (
        <div>
            {widgets.map((widget) => { // commented because it fails
                <div>{widget.name}</div>;
            })}
        </div>
    );
};

export default UserGet;

