import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useFormik } from "formik";
import { useCallback } from "react";
import { UserSchema } from "../validation/User.shema.js";


const EditUser = () => {
    const [widgets, setWidgets] = useState({ name: '', salary: '', section: '', position: '' });

    useEffect(() => {
        getUserById();
    }, []);


    const updateUser = async (e) => {
        e.preventDefault();
        console.log("====", process.env.REACT_APP_URL );
        try {
            await axios.put(`${process.env.REACT_APP_URL}/users/${id}`, {
                ...formik.values
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
    
    const getUserById = async () => {
        const response = await axios.get(`${process.env.REACT_APP_URL}/users/${id}`);
        const data = response.data;
        console.log(response.data, '1111111111111111111111');
        setWidgets({ name: data.name, salary: data.salary.amount, section: data.section.title, position: data.position.title })
    };

    const formik = useFormik({
        initialValues: {
            name: widgets.name,
            salary: widgets.salary,
            section: widgets.section,
            position: widgets.position
        },
        enableReinitialize: true,
        validationSchema: UserSchema,
        onSubmit: updateUser,
    });

    const setInputValue = useCallback(
        (key, value) =>
            formik.setValues({
                ...formik.values,
                [key]: value,
            }),
        [formik]
    );

    const navigate = useNavigate();
    const { id } = useParams();
    console.log('------ID----', id);

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateUser}>
                    <Input name="name" onBlur={formik.handleBlur} valueName={formik.values.name} eventName={(e) => setInputValue("name", e.target.value)} valErrName={formik.errors.name} touch={formik.touched.name} />
                    <Input name="salary" onBlur={formik.handleBlur} valueName={formik.values.salary} eventName={(e) => setInputValue("salary", e.target.value)} valErrName={formik.errors.salary} touch={formik.touched.salary}/>
                    <Input name="section" onBlur={formik.handleBlur} valueName={formik.values.section} eventName={(e) => setInputValue("section", e.target.value)} valErrName={formik.errors.section} touch={formik.touched.section}/>
                    <Input name="position" onBlur={formik.handleBlur} valueName={formik.values.position} eventName={(e) => setInputValue("position", e.target.value)} valErrName={formik.errors.position} touch={formik.touched.position}/>
                    <Button eventName="submit" onBlur={formik.handleBlur} nameClass="button is-success" event="Update" formValid={!formik.isValid} />
                </form>
            </div>
        </div>

    );
};

export default EditUser;
