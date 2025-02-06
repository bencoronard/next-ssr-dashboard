import * as Yup from "yup";

export const createResourceFormInitValue = {
  field1: "",
  field2: "",
  field3: "",
};

export const createResourceFormValidation = Yup.object().shape({
  field1: Yup.string().required("Field1 required"),
  field2: Yup.string().required("Field2 required"),
  field3: Yup.string().required("Field2 required"),
});
