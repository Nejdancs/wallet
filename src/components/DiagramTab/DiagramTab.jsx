import React from 'react';
import Chart from './Chart/Chart';
import FormFilter from './FormFilter';
import Table from './Table';
import { Section, Title, Column } from './DiagramTab.styled';

const DiagramTab = () => {
  const incomingData = [
    { _id: 1, category: 'Basic expenses', amount: 11000.12 },
    { _id: 2, category: 'Car', amount: 800 },
    { _id: 3, category: 'Products', amount: 5600.56 },
    { _id: 5, category: 'Self care', amount: 2513.32 },
    { _id: 4, category: 'Child care', amount: 9645.0 },
    { _id: 6, category: 'Household', amount: 6561.0 },
    { _id: 7, category: 'Education', amount: 455.56 },
    { _id: 8, category: 'Leisure', amount: 1000.02 },
    { _id: 9, category: 'Other expenses', amount: 4548.0 },
  ];

  return (
    <Section>
      <Column>
        <Title>Statistics</Title>
        <Chart balance={26500} incomingData={incomingData} />
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
