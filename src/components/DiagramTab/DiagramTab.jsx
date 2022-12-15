import React from 'react';
import Chart from './Chart/Chart';
import FormFilter from './FormFilter/FormFilter';
import Table from './Table/Table';
import { Section, Title, Column } from './DiagramTab.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import API from 'services/api/api';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const DiagramTab = () => {
  const [filter, setFilter] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });
  const [isLoading, setIsLoading] = useState(true);

  const [statistics, setStatistics] = useState({
    expenses: [],
    totalExpenses: 0,
    totalIncome: 0,
    actDates: [],
  });
  const balance = useSelector(state => state.auth.user.balance);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await API.getStatistics(filter);
        setStatistics(data);
      } catch (error) {
        toast.error("can't connect");
      }
      setIsLoading(false);
    })();
  }, [filter]);

  const onFilterChange = value => {
    setFilter(prevState => ({ ...prevState, ...value }));
  };

  return (
    <Section>
      <Column>
        <Title>Statistics</Title>

        <Chart
          isLoading={isLoading}
          balance={balance}
          expenses={statistics.expenses}
        />
      </Column>
      <Column>
        <FormFilter
          onFilterChange={onFilterChange}
          actDates={statistics.actDates}
          dates={filter}
        />
        <Table statistics={statistics} />
      </Column>
    </Section>
  );
};
export default DiagramTab;
