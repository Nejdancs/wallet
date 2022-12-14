import React, { useEffect } from 'react';
import { useElementWidth } from 'hooks/useElementWidth';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import theme from '../../../theme/theme';
import { ChartContainer, DoughnutBalance } from './Chart.styled';
import { numberSpace } from 'helpers';
import Media from 'react-media';
import SkeletonStatChart from 'components/Loader/SkeletonStatChart';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ balance, expenses, isLoading }) => {
  const [ref, width] = useElementWidth();

  let data;

  useEffect(() => {
    for (let id in ChartJS.instances) {
      ChartJS.instances[id].resize(width, width);
    }
  }, [ref, width]);

  if (expenses.length > 0) {
    data = {
      labels: expenses.map(trans => trans.categoryName[0]),
      datasets: [
        {
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
    <Media
      queries={{
        small: '(max-width: 767px)',
        medium: '(min-width: 768px) and (max-width: 1279px)',
        large: '(min-width: 1280px)',
      }}
    >
      {matches => (
        <>
          {(matches.small || matches.medium || matches.large) && (
            <ChartContainer ref={ref}>
              {isLoading ? (
                <SkeletonStatChart width={width} />
              ) : (
                <>
                  <Doughnut
                    data={data}
                    options={options}
                    updateMode="resize"
                    redraw={true}
                  />
                  <DoughnutBalance>
                    {'\u20B4'} {numberSpace(balance)}
                  </DoughnutBalance>
                </>
              )}
            </ChartContainer>
          )}
        </>
      )}
    </Media>
  );
};
export default Chart;
