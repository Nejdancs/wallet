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
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [statistics, setStatistics] = useState([]);
  // const balance = useSelector(state=>state.user.balance)
  // переделать на редакс
  let balance = 0;

  useEffect(() => {
    const res = axios.post('/api/transactions/statistics', { month, year });
    setStatistics(res.data);
    //переделать на редакс
    balance = axios.post('/api/transactions/statistics', { month, year });
    setStatistics(res.data);
  }, [month, year]);

  // const incomingData = [
  //   { _id: 1, category: 'Main expenses', amount: 11000.12 },
  //   { _id: 2, category: 'Car', amount: 800 },
  //   { _id: 3, category: 'Products', amount: 5600.56 },
  //   { _id: 5, category: 'Self care', amount: 2513.32 },
  //   { _id: 4, category: 'Child care', amount: 9645.0 },
  //   { _id: 6, category: 'Household products', amount: 6561.0 },
  //   { _id: 7, category: 'Education', amount: 455.56 },
  //   { _id: 8, category: 'Leisure', amount: 1000.02 },
  //   { _id: 9, category: 'Other expenses', amount: 4548.0 },
  //   { _id: 9, category: 'Entertainment', amount: 2328.0 },
  // ];

  return (
    <Section>
      <Column>
        <Title>Statistics</Title>
        <Chart balance={26500} incomingData={statistics.expenses} />
      </Column>
      <Column>
        <FormFilter />
        <Table
          incomingData={incomingData}
          totals={{ expenses: 22549.24, income: 27350.0 }}
        />
      </Column>
    </Section>
  );
};
export default DiagramTab;
