import * as yup from 'yup';
import regEx from 'assets/regEx/regEx';

const signUp = yup.object().shape({
  email: yup
    .string()
    .min(6)
    .max(50, 'email length must be less than 50 characters')
    .matches(regEx.email, 'type valid email')
    .required(),
  password: yup
    .string()
    .min(6, 'password must contain at least 6 characters')
    .max(16, 'the password must contain no more than 16 characters')
    .matches(regEx.password, 'must contain a letter and a number')
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords need to be the same')
    .required('is required field'),
  name: yup
    .string()
    .min(1)
    .max(12, 'must be less than 14 characters')
    .matches(
      regEx.name,
      'the name can contain letters and numbers without spaces'
    )
    .required(),
});

const login = yup.object().shape({
  email: yup
    .string()
    .min(6)
    .max(50, 'email length must be less than 50 characters')
    .matches(regEx.email, 'type valid email')
    .required(),
  password: yup.string().required(),
});

const authValidate = {
  signUp,
  login,
};

export default authValidate;
