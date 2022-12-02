import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import theme from '../../theme/theme';
import { ChartContainer, DoughnutBalance } from './DiagramTab.styled.js';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ balance }) => {
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

  const data = {
    labels: incomingData.map(trans => trans.category),
    datasets: [
      {
        // label: 'Doughnut Chart',
        data: incomingData.map(trans => trans.amount),
        backgroundColor: theme.doughnutColors,
        borderColor: theme.doughnutColors,
        borderWidth: 1,
      },
    ],
  };

  const options = { cutout: '70%' };
  return (
    <ChartContainer>
      <Doughnut data={data} options={options} />
      <DoughnutBalance>
        {'\u20B4'} {balance}
      </DoughnutBalance>
    </ChartContainer>
  );
};
export default Chart;
