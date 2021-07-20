import * as yup from 'yup'

export default yup.object().shape({
    username: yup
        .string()
        .required("Username is requires")
        .min(3, 'Username must be 3 chars or longer'),
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
    role: yup
        .string()
        .oneOf(['tl', 'instructor', 'alumni', 'student'], 'Role is required'),
    civil: yup
    .string()
    .boolean()
    .oneOf(['single', 'married'], "Civil status is required"),
    //checkboxes are complete
    hiking: yup.boolean(),
    reading: yup.boolean(),
    coding: yup.boolean(),
})

// // Here goes the schema for the form
// const formSchema = Yup.object().shape({
//     email: Yup
//       .string()
//       .email("Must be a valid email address.")
//       .required("Must include email address."),
//     password: Yup
//       .string()
//       .required("Password is Required")
//       .min(6, "Passwords must be at least 6 characters long."),
//     terms: Yup
//       .boolean()
//       .oneOf([true], "You must accept Terms and Conditions")
//       // required isn't required for checkboxes.
//   });