import * as yup from "yup";

export const UserSchema = yup.object().shape({
    name: yup.string().min(3).required(),
    salary: yup.number().required(),
    section: yup.string().min(3).required(),
    position: yup.string().min(3).required(),
});