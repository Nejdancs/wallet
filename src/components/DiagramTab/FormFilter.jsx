import React from 'react';
import { Field, Form, Formik } from 'formik';
import { FormEl, Input, InpWrapper } from './DiagramTab.styled.js';

const FormFilter = () => {
  return (
    <div>
      <Formik initialValues={{ month: '03', year: '2022' }} onSubmit={() => {}}>
        <FormEl>
          <InpWrapper>
            <Input as="select" name="month">
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
            </Input>
          </InpWrapper>
          <InpWrapper>
            <Input as="select" name="year">
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
            </Input>
          </InpWrapper>
        </FormEl>
      </Formik>
    </div>
  );
};

export default FormFilter;
