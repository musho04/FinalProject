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
    console.log('---------e----------', e);
    try {
      await axios.post(`${process.env.REACT_APP_URL}/users`, {
        name: formik.values.name,
        salary: formik.values.salary,
        section: formik.values.section,
        position: formik.values.position
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }

  };

  const FILEDES = {
    NAME:'name',
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
console.log("aaaaaaaaaaaaaaaaa", formik.touched)
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <Input name="name" onBlur={formik.handleBlur} valueName={formik.values.name} eventName={(e) => setInputValue("name", e.target.value)} valErrName={formik.errors.name} touch={formik.touched.name} />
          <Input name="salary" onBlur={formik.handleBlur}  valueName={formik.values.salary} eventName={(e) => setInputValue("salary", e.target.value)} valErrName={formik.errors.salary} touch={formik.touched.salary} />
          <Input name="section" onBlur={formik.handleBlur}  valueName={formik.values.section} eventName={(e) => setInputValue("section", e.target.value)} valErrName={formik.errors.section} touch={formik.touched.section} />
          <Input name="position" onBlur={formik.handleBlur}     valueName={formik.values.position} eventName={(e) => setInputValue("position", e.target.value)} valErrName={formik.errors.position} touch={formik.touched.position}/>
          {!!formik.errors.name}

          <div className="field">
            <Button eventName="submit" onBlur={formik.handleBlur} nameClass="button is-success" event="Save" formValid={!formik.isValid}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;