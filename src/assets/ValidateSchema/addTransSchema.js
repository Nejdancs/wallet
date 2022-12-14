import * as yup from 'yup';

const addTransSchema = yup.object().shape({
  amount: yup
    .number()
    .test('', 'You can use decimals up to two places', value => {
      if (!value) return true;
      return (value + '').match(/^[0-9]+(\.[0-9]{0,2})?$/);
    })
    .required('It`s a required field')
    .moreThan(0, 'Enter a number greater than 0')
    .positive('Must be a positive number'),
  comment: yup.string().max(100, 'No more than 100 characters'),
});

export default addTransSchema;
