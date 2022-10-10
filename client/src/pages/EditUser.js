import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useFormik } from "formik";
import { useCallback } from "react";
import * as yup from "yup";

const EditUser = () => {
    const [widgets, setWidgets] = useState({ name: '', salary: '', section: '', position: '' });

    useEffect(() => {
        getUserById();
    }, []);


    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5001/users/${id}`, {
                ...formik.values
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
    
    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5001/users/${id}`);
        const data = response.data;
        console.log(response.data, '1111111111111111111111');
        setWidgets({ name: data.name, salary: data.salary.amount, section: data.section.title, position: data.position.title })
    };

    const schema = yup.object().shape({
        name: yup.string().min(3).required(),
        salary: yup.number().required(),
        section: yup.string().min(3).required(),
        position: yup.string().min(3).required(),
    });

    const formik = useFormik({
        initialValues: {
            name: widgets.name,
            salary: widgets.salary,
            section: widgets.section,
            position: widgets.position
        },
        enableReinitialize: true,
        validationSchema: schema,
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
                    <Input name="Name" valueName={formik.values.name} eventName={(e) => setInputValue("name", e.target.value)} valErrName={formik.errors.name} />
                    <Input name="Salary" valueName={formik.values.salary} eventName={(e) => setInputValue("salary", e.target.value)} valErrName={formik.errors.salary} />
                    <Input name="Section" valueName={formik.values.section} eventName={(e) => setInputValue("section", e.target.value)} valErrName={formik.errors.section} />
                    <Input name="Position" valueName={formik.values.position} eventName={(e) => setInputValue("position", e.target.value)} valErrName={formik.errors.position} />
                    <Button eventName="submit" nameClass="button is-success" event="Update" formValid={!formik.isValid} />
                </form>
            </div>
        </div>

    );
};

export default EditUser;
