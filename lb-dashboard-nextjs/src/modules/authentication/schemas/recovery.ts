import * as Yup from "yup";

export const recoveryFormInitValue = {
  username: "",
};

export const recoveryFormValidation = Yup.object().shape({
  username: Yup.string().required("Username required"),
});
