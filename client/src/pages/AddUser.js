import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useCallback } from "react";
import Input from "../components/Input.js";
import Button from "../components/Button.js";
import { UserSchema } from "../validation/User.shema.js";

const AddUser = () => {
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_URL}/users`, {
        name: formik.values.name,
        salary: formik.values.salary,
        section: formik.values.section,
        position: formik.values.position
      });
      navigate("/");
    } catch (error) {
    }

  };

  const FILEDES = {
    NAME: 'name',
    SALARY: 'salary',
    SECTION: 'section',
    POSITION: 'position'
  }

  const formik = useFormik({
    initialValues: {
      [FILEDES.NAME]: "",
      [FILEDES.SALARY]: "",
      [FILEDES.SECTION]: "",
      [FILEDES.POSITION]: ""
    },
    validationSchema: UserSchema,
    onSubmit: saveUser,
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
        <Button eventName="submit" onBlur={formik.handleBlur} nameClass="button is-success" event="Save" formValid={!formik.isValid} onClick={saveUser} />
        {!!formik.errors.name}
      </div>
    </div>
  );
};

export default AddUser;