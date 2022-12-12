import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { FormEl, Select, InpWrapper } from './FormFilter.styled';
import { useEffect } from 'react';

const FormFilter = ({ onFilterChange, actDates, dates }) => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [actYears, setActYears] = useState([]);

  useEffect(() => {
    const actYears = actDates.map(el => el.year) ?? [];
    setActYears(actYears);
  }, [actDates]);

  const checkActMonth = month => {
    return !!!actDates.find(
      elem => elem.year === +dates.year && elem.monthes.includes(+month)
    );
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
              {actYears?.length ? (
                actYears.map(year => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))
              ) : (
                <option key={year} value={year} disabled={true}>
                  {year}
                </option>
              )}
            </Field>
          </InpWrapper>
        </FormEl>
      </Formik>
    </div>
  );
};

export default FormFilter;
