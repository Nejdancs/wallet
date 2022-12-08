import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import theme from '../../../theme/theme';
import { ChartContainer, DoughnutBalance } from './Chart.styled';
import { numberSpace } from 'helpers';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ balance, expenses }) => {
  let data;
  if (expenses.length > 0) {
    data = {
      labels: expenses.map(trans => trans.categoryName[0]),
      datasets: [
        {
          // label: 'Doughnut Chart',
          data: expenses.map(trans => trans.amount),
          backgroundColor: theme.doughnutColors,
          borderColor: theme.doughnutColors,
          borderWidth: 1,
        },
      ],
    };
  } else {
    data = {
      labels: ['no data'],
      datasets: [
        {
          data: [1],
          backgroundColor: '#ababab',
          borderColor: theme.colors.accentSecondary,
          borderWidth: 1,
        },
      ],
    };
  }

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
