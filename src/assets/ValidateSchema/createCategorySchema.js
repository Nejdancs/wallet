import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(1)
    .max(20, 'must be less than 21 characters')
    .required(),
});

export default schema;
