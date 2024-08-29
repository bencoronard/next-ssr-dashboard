import * as Yup from "yup";

export const forgotPasswordFormInitValue = {
  username: "",
};

export const forgotPasswordFormValidation = Yup.object().shape({
  username: Yup.string().required("Username required"),
});
