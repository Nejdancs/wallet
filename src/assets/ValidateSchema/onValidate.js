import * as yup from 'yup';
import regEx from 'assets/regEx/regEx';

const onValidate = yup.object().shape({
  email: yup
    .string()
    .min(6)
    .max(50, 'email length must be less than 50 characters')
    .matches(regEx.email, 'type valid email')
    .required(),
  password: yup
    .string()
    .min(6, 'password must contain at least 6 characters')
    .max(12, 'the password must contain no more than 12 characters')
    .matches(regEx.password, 'must contain a letter and a number')
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'both passwords need to be the same')
    .required('is required field'),
  name: yup
    .string()
    .min(2)
    .max(14, 'must be less than 14 characters')
    .matches(regEx.name, 'type valid name')
    .required(),
});

export default onValidate;
