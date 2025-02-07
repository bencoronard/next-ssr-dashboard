import * as Yup from "yup";

export const loginFormInitValue = {
  username: "",
  password: "",
};

export const loginFormValidation = Yup.object().shape({
  username: Yup.string().required("Username required"),
  password: Yup.string().required("Password required"),
});
