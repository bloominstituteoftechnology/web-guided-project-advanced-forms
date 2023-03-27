import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(3, "username must be 3 chac long"),
  email: yup.string().email().required(),
  role: yup.string(),
  civil: yup.string(),
  coding: yup.boolean(),
  hiking: yup.boolean(),
  reading: yup.boolean(),
});
