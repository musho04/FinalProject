import React, { useCallback } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types"
import Button from "./Button";

const schema = yup.object().shape({
    name: yup.string().min(3).required(),
  });

function TestForma(props) {
    const {
        name, valueName, eventName
    } = props;

    const handleOneSubmit = {sbmit}
    const formik = useFormik({
        initialValues: {
          name: "",
        },
        validationSchema: schema,
        onSubmit: handleOneSubmit,
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
        // <div className="field">
        //     <label className="label">{name}</label>
        //     <div className="control">
        //       <input
        //         type="text"
        //         className="input"
        //         value={valueName}
        //         onChange={eventName}
        //         placeholder={name}
        //       />
        //     </div>
        //   </div>
        <form onSubmit={formik.handleSubmit}>
        <input
          placeholder="name"
          value={formik.values.name}
          onChange={(e) => setInputValue("name", e.target.value)}
        />
        <small>{formik.errors.name}</small>
        {/* <button type="submit" disabled={!formik.isValid}>
          Submit
        </button> */}
        <Button eventName="submit" nameClass="button is-success" event="Save" disabled={!formik.isValid} />
      </form>
    );
}

TestForma.propTypes = {
    name: PropTypes.string,
    valueName: PropTypes.string,
    eventName: PropTypes.string
};

TestForma.defaultProps = {
    name: "",
    valueName: "",
    eventName: ""
}

export default TestForma
