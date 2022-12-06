import Media from 'react-media';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { DashboardContainer, Wrapper } from './Dashboard.styled';
import { useLocation } from 'react-router-dom';

export const Dashboard = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <DashboardContainer>
        <Navigation />
        <Media
          queries={{
            mobile: '(max-width: 767px)',
            tablet: '(min-width: 768px)',
          }}
        >
          {matches => (
            <>
              {matches.tablet && <Balance />}
              {matches.mobile && pathname === '/home' && <Balance />}
            </>
          )}
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
