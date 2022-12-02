import React from 'react';
import Chart from './Chart';
import { Title } from './DiagramTab.styled';

const DiagramTab = () => {
  return (
    <section>
      <Title>Statistics</Title>
      <Chart balance={26500} />
    </section>
  );
};
export default DiagramTab;
