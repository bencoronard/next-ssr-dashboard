import * as yup from "yup";

export const loginFormInitValue = {
  username: "",
  password: "",
};

export const loginFormValidation = yup.object().shape({
  username: yup.string().required("Username required"),
  password: yup.string().required("Password required"),
});
