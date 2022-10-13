import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useFormik } from "formik";
import { useCallback } from "react";
import { UserSchema } from "../validation/User.shema.js";
import { selecterUser } from "../selectors/userListSelector";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUsers } from "../features/user/userSlice.js";



const EditUser = () => {
    const dispatch = useDispatch()
    const data = useSelector(selecterUser);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getUser(id))
    }, []);


    const updateUser = async (e) => {
        try {
            await axios.put(`${process.env.REACT_APP_URL}/users/${id}`, {
                ...formik.values
            });
            dispatch(getUsers()).then(()=>{
                navigate("/");
            })
            
        } catch (error) {
            console.log("Error", error);
        }
    };

    const formik = useFormik({
        initialValues: {
            name: data.name,
            salary: data.salary?.amount,
            section: data.section?.title,
            position: data.position?.title
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



    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                    <Input name="name" onBlur={formik.handleBlur} value={formik.values.name} event={(e) => setInputValue("name", e.target.value)} error={formik.errors.name} touched={formik.touched.name} />
                    <Input name="salary" onBlur={formik.handleBlur} value={formik.values.salary} event={(e) => setInputValue("salary", e.target.value)} error={formik.errors.salary} touched={formik.touched.salary} />
                    <Input name="section" onBlur={formik.handleBlur} value={formik.values.section} event={(e) => setInputValue("section", e.target.value)} error={formik.errors.section} touched={formik.touched.section} />
                    <Input name="position" onBlur={formik.handleBlur} value={formik.values.position} event={(e) => setInputValue("position", e.target.value)} error={formik.errors.position} touched={formik.touched.position} />
                    <Button eventName="submit" onBlur={formik.handleBlur} nameClass="button is-success" event="Update" formValid={!formik.isValid} onClick={updateUser}/>
            </div>
        </div>

    );
};

export default EditUser;
