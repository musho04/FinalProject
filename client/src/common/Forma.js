import React from "react";
import { Formik } from "formik"
import * as yup from 'yup'

function Forma() {
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError("Pardadir tar e").required("PARDADIR")
    })
    return (
    <div>
        <Formik
        initiaValues={{
            name: "",
            salary: "",
        }}
        validateOnBlur
        onSubmit = {(values) => {console.log(values);}}
        validationSchema={validationsSchema}
        >
            {({values, errors, touched, handleChange, handelBlur, isValid, handleSubmit, dirty}) => {
                <div className={`form`}>
                    <p>
                        <label></label>
                        <input 
                        type={'text'}
                        name={"name"}
                        onChange={handleChange}
                        onBlur={handelBlur}
                        value={values.name}
                        />
                    </p>
                    { touched.name && errors.name && <p className={"error"}>{errors.name}</p> }
                    <button
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                    type={"submit"}
                    >

                    </button>
                </div>
            }}
        </Formik>
    </div>
    );
}

export default Forma

