import React from 'react';
import Chart from './Chart/Chart';
import FormFilter from './FormFilter/FormFilter';
import Table from './Table/Table';
import { Section, Title, Column } from './DiagramTab.styled';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
// import { useSelector } from 'react-redux';

const DiagramTab = () => {
  const [filter, setFilter] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const [statistics, setStatistics] = useState({
    expenses: [],
    totalExpenses: 0,
    totalIncome: 0,
    actDates: [],
  });
  // const balance = useSelector(state=>state.user.balance)
  // переделать на редакс
  let balance = 0;

  useEffect(() => {
    (async () => {
      try {
        // temp axios to localhost
        const tempAxios = axios.create({
          baseURL: 'http://localhost:3001',
          headers: {
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTA1NDMxNzVmYWFmYmVkOWRkZjEwOCIsImVtYWlsIjoiYm9iQG1haWwuY29tIiwiaWF0IjoxNjcwNDk4MTk3LCJleHAiOjE2NzA1ODQ1OTd9.iGx__EHS7TuMuqtDsDF1N1FrbyW0CFL9lcQs8dUgWeA',
          },
        });

        const res = await tempAxios.post(
          '/api/transactions/statistics',
          filter
        );

        console.log(res.data.data);
        setStatistics(res.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [filter]);

  const onFilterChange = value => {
    setFilter(prevState => ({ ...prevState, ...value }));
  };

  return (
    <Section>
      <Column>
        <Title>Statistics</Title>
        <Chart balance={balance} expenses={statistics.expenses} />
      </Column>
      <Column>
        <FormFilter
          onFilterChange={onFilterChange}
          actDates={statistics.actDates}
        />
        <Table statistics={statistics} />
      </Column>
    </Section>
  );
};
export default DiagramTab;
