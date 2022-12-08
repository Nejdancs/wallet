import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { FormEl, Select, InpWrapper } from './FormFilter.styled';

const FormFilter = ({ onFilterChange, actDates, dates }) => {
  const [month, setMonth] = useState('month');
  const [year, setYear] = useState('year');

  const checkActMonth = month => {
    return !!!actDates.find(
      elem => elem.year === +dates.year && elem.monthes.includes(+month)
    );
  };

  const checkActYear = year => {
    return !!!actDates.find(elem => elem.year === year);
  };

  return (
    <div>
      <Formik
        initialValues={{
          month: 'month',
          year: 'year',
        }}
      >
        <FormEl>
          <InpWrapper>
            <Field
              as={Select}
              name="month"
              onChange={e => {
                setMonth(e.target.value);
                onFilterChange({ month: +e.target.value });
              }}
              value={month}
            >
              <option value="month" disabled={true}>
                Month
              </option>
              <option value="01" disabled={checkActMonth(1)}>
                January
              </option>
              <option value="02" disabled={checkActMonth(2)}>
                February
              </option>
              <option value="03" disabled={checkActMonth(3)}>
                March
              </option>
              <option value="04" disabled={checkActMonth(4)}>
                April
              </option>
              <option value="05" disabled={checkActMonth(5)}>
                May
              </option>
              <option value="06" disabled={checkActMonth(6)}>
                June
              </option>
              <option value="07" disabled={checkActMonth(7)}>
                July
              </option>
              <option value="08" disabled={checkActMonth(8)}>
                August
              </option>
              <option value="09" disabled={checkActMonth(9)}>
                September
              </option>
              <option value="10" disabled={checkActMonth(10)}>
                October
              </option>
              <option value="11" disabled={checkActMonth(11)}>
                November
              </option>
              <option value="12" disabled={checkActMonth(12)}>
                December
              </option>
            </Field>
          </InpWrapper>
          <InpWrapper>
            <Field
              as={Select}
              name="year"
              value={year}
              onChange={e => {
                setYear(e.target.value);
                onFilterChange({ year: +e.target.value });
              }}
            >
              <option value="year" disabled={true}>
                Year
              </option>
              <option value="2021" disabled={checkActYear(2021)}>
                2021
              </option>
              <option value="2022" disabled={checkActYear(2022)}>
                2022
              </option>
              <option value="2023" disabled={checkActYear(2023)}>
                2023
              </option>
              <option value="2024" disabled={checkActYear(2024)}>
                2024
              </option>
              <option value="2025" disabled={checkActYear(2025)}>
                2025
              </option>
              <option value="2026" disabled={checkActYear(2026)}>
                2026
              </option>
              <option value="2027" disabled={checkActYear(2027)}>
                2027
              </option>
              <option value="2028" disabled={checkActYear(2028)}>
                2028
              </option>
              <option value="2029" disabled={checkActYear(2029)}>
                2029
              </option>
              <option value="2030" disabled={checkActYear(2030)}>
                2030
              </option>
            </Field>
          </InpWrapper>
        </FormEl>
      </Formik>
    </div>
  );
};

export default FormFilter;
