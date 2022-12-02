import React from 'react';
import Chart from './Chart';
import FormFilter from './FormFilter';
import Table from './Table';
import { Title } from './DiagramTab.styled';

const DiagramTab = () => {
  const incomingData = [
    { category: 'Basic expenses', amount: 11000 },
    { category: 'Car', amount: 800 },
    { category: 'Products', amount: 5600 },
    { category: 'Self care', amount: 2513 },
    { category: 'Child care', amount: 9645 },
    { category: 'Household', amount: 6561 },
    { category: 'Education', amount: 455 },
    { category: 'Leisure', amount: 1000 },
    { category: 'Other expenses', amount: 4548 },
  ];

  return (
    <section>
      <Title>Statistics</Title>
      <Chart balance={26500} incomingData={incomingData} />
      <FormFilter />
      <Table
        incomingData={incomingData}
        totals={{ expenses: 22549.24, income: 27350.0 }}
      />
    </section>
  );
};
export default DiagramTab;
