import * as yup from 'yup';

const schema = yup.object().shape({
  categoryName: yup
    .string()
    .min(1)
    .max(20, 'must be less than 21 characters')
    .required('It`s a required field'),
});

export default schema;
