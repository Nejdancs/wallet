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
  });
  // const balance = useSelector(state=>state.user.balance)
  // переделать на редакс
  let balance = 0;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(
          '/api/transactions/statistics',
          filter,
          // temp
          {
            headers: {
              authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTA1NDMxNzVmYWFmYmVkOWRkZjEwOCIsImVtYWlsIjoiYm9iQG1haWwuY29tIiwiaWF0IjoxNjcwNDExMTk4LCJleHAiOjE2NzA0OTc1OTh9.f1XraoZa-aFbLUiaI5yI5RQFquB-e7AC2rvI50ov2qE',
            },
          }
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
        <FormFilter onFilterChange={onFilterChange} />
        <Table statistics={statistics} />
      </Column>
    </Section>
  );
};
export default DiagramTab;
