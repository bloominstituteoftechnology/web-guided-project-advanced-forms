// Here goes the schema for the form
import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Gotta have a username ya chump!")
    .min(3, "Whattuh ya trying to do here, gimme a real name chump!"),
  email: yup
    .string()
    .email("You must be kidding me, you think I was born yesterday?! Gimme an email chump!")
    .required("Gotta provide some contact info"),
  role: yup
    .string()
    .oneOf(["instructor", "student", "alumni"], "You've gotta be somethin' chump!"),
  civil: yup
    .string()
    .oneOf(["married", "single"], "C'mon, you're either married, or single, so which is it?"),
  coding: yup.boolean(),
  reading: yup.boolean(),
  hiking: yup.boolean()
});

export default formSchema;