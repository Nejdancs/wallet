import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import theme from '../../../theme/theme';
import { ChartContainer, DoughnutBalance } from './Chart.styled';
import { numberSpace } from 'helpers';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ balance, incomingData }) => {
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
        {'\u20B4'} {numberSpace(balance)}
      </DoughnutBalance>
    </ChartContainer>
  );
};
export default Chart;
