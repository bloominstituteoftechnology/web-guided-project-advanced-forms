// Here goes the schema for the form
import * as yup from 'yup';

// Describe the perfect formValues object to Yup
const schema = yup.object().shape({
	username: yup.string().required().min(3, "Name must be 3 letters or more"),
	email: yup.string().email().required(),
	role: yup.string().required(),
	civil: yup.string(),
	hiking: yup.boolean(),
	reading: yup.boolean(),
	coding: yup.boolean(),
})

export default schema