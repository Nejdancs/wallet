import Media from 'react-media';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { DashboardContainer, Wrapper } from './Dashboard.styled';

export const Dashboard = () => {
  return (
    <Wrapper>
      <DashboardContainer>
        <Navigation />
        {/* <Balance /> */}
        <Media
          queries={{
            tablet: '(min-width: 768px)',
          }}
        >
          {matches => matches.tablet && <Balance />}
        </Media>
      </DashboardContainer>
      <Media
        queries={{
          tablet: '(min-width: 768px)',
        }}
      >
        {matches => matches.tablet && <Currency />}
      </Media>
    </Wrapper>
  );
};

export default Dashboard;
