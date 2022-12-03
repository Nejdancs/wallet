import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { FormEl, Select, InpWrapper } from './FormFilter.styled';

const FormFilter = props => {
  // const [month, setMonth] = useState('month');
  // const [year, setYear] = useState('year');

  return (
    <div>
      <Formik
        initialValues={{
          month: 'month',
          year: 'year',
        }}
        onSubmit={() => {}}
      >
        <FormEl>
          <InpWrapper>
            <Field as={Select} name="month">
              <option value="month" disabled={true}>
                Month
              </option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </Field>
          </InpWrapper>
          <InpWrapper>
            <Field as={Select} name="year">
              <option value="year" disabled={true}>
                Year
              </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </Field>
          </InpWrapper>
        </FormEl>
      </Formik>
    </div>
  );
};

export default FormFilter;
